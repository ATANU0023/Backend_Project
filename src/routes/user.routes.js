import { Router } from "express";
import {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loggedOutUser,
    loginUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} from "../controllers/user.controllers.js";
import { upload } from '../middlewares/multer .middleware.js'
import { verifyJwt } from "../middlewares/auth .middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }

    ]),
    registerUser
)

router.route("/login").post(
    loginUser
)

//secured routes
router.route("/logout").post(verifyJwt, loggedOutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change_password").post(verifyJwt, changeCurrentPassword)

router.route("/current_user").get(verifyJwt, getCurrentUser)

router.route("/update_account").patch(verifyJwt, updateAccountDetails)

router.route("/avatar").patch(verifyJwt, upload.single("avatar"), updateUserAvatar)

router.route("/cover_image").patch(verifyJwt, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:username").get(verifyJwt, getUserChannelProfile)

router.route("/watch_history").get(verifyJwt, getWatchHistory)

export default router