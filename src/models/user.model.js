import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercse: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercse: true,
    trim: true,
  },
  fullnaem: {
    type: String,
    required: true,

    trim: true,

    index: true,
  },
  avatar:{
    type:String, //cloudinary url
    requied:true
  },
  watchHistory:[
    {
        type:Schema.type.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    required:[true,'password is required']
},
refreshToken:{
    type:String
}
},
{
    timestamps:true
}

);

export const User = mongoose.model("User", userSchema);
