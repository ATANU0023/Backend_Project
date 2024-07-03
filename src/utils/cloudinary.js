import {v2 as cloudinary}  from "cloudinary";
import exp from "constants";
import fs from "fs"; //filesystem

          
cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET', 
});


const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null;
        
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has been uploaded succesfully
        console.log("File is uploaded succesfully", response.url);
        fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); //delete the file from local storage
        return null;
    }
}

export  {uploadOnCloudinary};