import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const  userSchema = new Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

export default userSchema;


// const mongoose = require('mongoose'); 
// var crypto = require('crypto'); 
  
// // creating user schema 
// const UserSchema = mongoose.Schema({ 
//     name : { 
//         type : String, 
//         required : true
//     }, 
//     email : { 
//         type : String, 
//         required : true
//     }, 
//     hash : String, 
//     salt : String 
// }); 

// UserSchema.methods.setPassword = function(password) { 
//     this.salt = crypto.randomBytes(16).toString('hex'); 
//     // 64 length and sha512 digest 
//     this.hash = crypto.pbkdf2Sync(password, this.salt,  
//     1000, 64, `sha512`).toString(`hex`); 
// }; 
// UserSchema.methods.validPassword = function(password) { 
//     var hash = crypto.pbkdf2Sync(password,  
//     this.salt, 1000, 64, `sha512`).toString(`hex`); 
//     return this.hash === hash; 
// }; 
// const User = module.exports = mongoose.model('User', UserSchema); 
 






// exports.userSignup=(req,res,next)=>{
//     debugger;
//     // console.log(req.body);
//     const name=req.body.Name;
//     const email=req.body.email;
//     const password=req.body.password;
    
//     const user=new userModel({
//     Name:name,
//     email:email,
//     password:password
//     })
//     // console.log(user);
//     return user.save()
//     .then(result=>{
//     console.log(result);
//     res.status(200).json({
//     message:"user created",
//     user_id:result._id
    
//     })
//     })
//     .catch(err=>{
//     if(!err.statusCode){
//     err.statusCode=500;
//     }
//     next(err);
//     })
//     }