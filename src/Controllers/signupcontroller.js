import mongoose from 'mongoose'
import userSchema from '../models/signupmodel'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
import bcrypt from 'bcryptjs';
var jwt=require('jsonwebtoken');
var isAuth=require('../middleware/isAuth')


const Access = mongoose.model('Access', userSchema)
 
// add new download to the database
// exports.addNewUser=(req, res)=> {
//     const reg=/^[A-Za-z]\w{7,14}$/;
//     if(reg.test(req.body.password))
//     {
//     if(req.body.password === req.body.confirmpassword){
//     req.body.password = cryptr.encrypt(req.body.password);
//     req.body. confirmpassword = cryptr.encrypt(req.body.confirmpassword);
//     }
//     } 
//     else{
//     req.body.password ="";
//     }
//     let newAccess = new Access(req.body)
//     newAccess.save((error, access) => {
//     if (error) { res.json(error) }
//     console.log("login")
//     res.json("user created successfully")

   
//     })
//     }




    exports.Signup = function(req, res){
      const reg_email=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        console.log("hii");
        if(reg_email.test(req.body.email)){
          // console.log(req.body);
        Access.find({email: req.body.email},function(err, data){
          if(data != null && data != ''){
            res.send("User already exists");
          }
        else
          {
            if (req.body.password !== req.body.confirmpassword) {
                res.send("password does not match");
                res.json("password does not match");
                }          
            var access = new Access(req.body);
            bcrypt.genSalt(10, function(err, salt){
              bcrypt.hash(access.password, salt, function(err, hash) {
                access.password = hash;
               
                access.save(function(err, data){
                  if(err)
                    res.send("User created succesfully");
                    res.json("User created succesfully");
                })
              })
            })
          }
        });
      }
      else {
        res.send('Email is invalid');
      }
    };
      




    exports.login = (req,res,next) =>{
      const email = req.body.email;
      const password = req.body.password;
      let loadedUser;
      Access.findOne({email: email})
      .then(user =>{
      if(!user){
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password,user.password);
      })
      .then(isEqual =>{
      if(!isEqual){
      const error = new Error('wrong password.');
      error.statusCode = 401;
      throw error;
      }
      const token = jwt.sign(
      {
      email: loadedUser.email,
      userId:loadedUser._id.toString()
      },
      'secret',
      
      )
      res.status(200).json({token: token, userId: loadedUser._id.toString()})
      })
      
      .catch(err => {
      if (!err.statusCode) {
      err.statusCode = 500;
      }
      next(err);
      
      });
      
      }



      exports.getAllLogin = (isAuth,function(req, res) {
        console.log("hello")
        Access.find({userId:req.decodedToken}, function(err, data) {
        if (err)
        res.send(err);
        res.json(data); 
        });
        });


      // //signIn
      // exports.login = function(req,res){
      //   Access.find({email: req.body.email}, function(err, data){
      //     if(data != null && data != ''){
      //      bcrypt.compare(req.body.password, data[0].password, function( err, isMatch) {
      //          if(isMatch == true){
      //           res.status(200).json("succesfully logged in");
      //         }else{
      //           res.send("Password does not match");
      //         }
      //       });
      //     }
      //      else{
      //       res.send("User does not exists");
      //     }
      //   });
      // };



 
// get all downloads from the database
// exports.getUsers=(req, res) => {
//     console.log("hii")
//     Access.find({}, (error, access) => {
//         if (error) { res.json(error) }
//         res.json(access)
//     })
// }
 









