import { jwt } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user .models";

export const  verifyJwt = asyncHandler(async(req, _ ,next)=>{ //here res is not in any use so we can use _ instead of res
    try {
        const token = req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer ", "")
    
        if(!token){
            throw new ApiError(401, "Unauthorized")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
    
            //frontend ?????
    
            throw new ApiError(401, "User not found Invalid access token");
        }
        
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, "Unauthorized")
    }

})