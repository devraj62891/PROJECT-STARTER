import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";



    // Configuration
    cloudinary.config({ 
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET
    });


    const uploadOnCloudinary=async (localFilePath)=>{
        try {
            if(!localFilePath) return null
            //upload on cloudinary
            const response=await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //file has been uploaded successfully
            console.log("file is uploaded successfully",response.url);
            
        } catch (error) {
            fs.unlinkSync(localFilePath);//remove temprory file saved on server
            return null
        }
    }
