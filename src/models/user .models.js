import mongoose from "mongoose";
import jwt from'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String, //cloudnary url
        required:true
    },
    coverimage:{
        type:String,

    },
    watchHistory:[
        {
            type:Schema.Types.ObectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken: {
        type: String
    }
    

},{timestamps:true});

userSchema.pre("save", async function(next){ // for hashing password . pre is used before saving the data 
    if(!this.isModified("password")) return next(); // if password is not modified then goto next middleware.
    this.password = bcrypt.hashSync(this.password,10); //If the password field has been modified, this line hashes the password using bcrypt. The number 10 is the salt round: the larger the number, the longer it takes to hash, and the more secure the hash is.

    next(); // This line calls the next middleware function in the stack. If there are no more middleware functions, it proceeds to the database operation.
})

userSchema.methods.isPasswordCorrect = async function(password){ //This line is defining a new method isPasswordCorrect on the instances of the User model. This method is asynchronous, meaning it returns a Promise that will resolve at a later time. The password parameter is the password to check against the hashed password stored in the database.

    return await bcrypt.compare(password, this.password) //This line is using the compare function from the bcrypt library to compare the provided password with the hashed password stored in the database. The compare function is asynchronous and returns a Promise that resolves to either true if the passwords match or false if they don't. The await keyword is used to pause the execution of the function until the Promise resolves.
}

userSchema.methods.genetateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}

userSchema.methods.genetateRefreshToken = function(){

    return jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }

    )

}



export const User = mongoose.model("User",userSchema)



