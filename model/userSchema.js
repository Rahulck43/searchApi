import mongoose, { Schema } from "mongoose";



const userSchema=Schema({
    name:{
        type:String,
        required:true
    },
   
    age:{
        type:Number,
        required:true
    }
},)


const userModel=mongoose.model('User',userSchema)
export default userModel