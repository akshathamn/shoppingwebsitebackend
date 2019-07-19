import mongoose from 'mongoose'
import userSchema from '../models/signupmodel'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
import bcrypt from 'bcryptjs';

const Access = mongoose.model('Access', userSchema)
 
// add new download to the database
exports.addNewUser=(req, res)=> {
    const reg=/^[A-Za-z]\w{7,14}$/;
    if(reg.test(req.body.password))
    {
    if(req.body.password === req.body.confirmpassword){
    req.body.password = cryptr.encrypt(req.body.password);
    req.body. confirmpassword = cryptr.encrypt(req.body.confirmpassword);
    }
    } 
    else{
    req.body.password ="";
    }
    let newAccess = new Access(req.body)
    newAccess.save((error, access) => {
    if (error) { res.json(error) }
    console.log("login")
    res.json("user created successfully")

   
    })
    }




    exports.Signup = function(req, res){
        console.log("hii");
        // console.log(req.body);
        Access.find({email: req.body.email},function(err, data){
          if(data != null && data != ''){
            res.send("User already exists");
          }
          else
          {
            // bcrypt.compare(req.body.password, data[0].password, function( err, isMatch) {
              if (req.body.password !== req.body.confirmpassword) {
                res.send("password does not match");
                res.json("password does not match");
                // var err = new Error('Passwords do not match.');
                // err.status = 400;
                // return next(err);
               
            }          
            var access = new Access(req.body);
            bcrypt.genSalt(10, function(err, salt){
              bcrypt.hash(access.password, salt, function(err, hash) {
                access.password = hash;
               
                access.save(function(err, data){
                  if(err)
                    res.send("User created succesfully");
                    // res.status(200).json({message:"user created successfully"});
                  res.json("User created succesfully");
                
                })
              })
            })
          }
        });
      };
      
      //signIn
      exports.login = function(req,res){
        Access.find({email: req.body.email}, function(err, data){
          if(data != null && data != ''){
           bcrypt.compare(req.body.password, data[0].password, function( err, isMatch) {
               if(isMatch == true){
                res.status(200).json("succesfully logged in");
              }else{
                res.send("Password does not match");
              }
            });
          }
           else{
            res.send("User does not exists");
          }
        });
      };



 
// get all downloads from the database
exports.getUsers=(req, res) => {
    console.log("hii")
    Access.find({}, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// get single download based on the id
exports.getUser=(req, res) => {
    Access.findById(req.params.id, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// update the download information based on id
exports.updateUser=(req, res) => {
    Access.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// delete the download from the database.
exports.deleteUser=(req, res) => {
    Access.remove((error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
