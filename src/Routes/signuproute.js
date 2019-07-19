import { addNewUser, getUsers, getUser, updateUser, deleteUser,Signup,login}  from '../Contollers/signupcontroller'
 
const { check, validationResult  } = require('express-validator/check')

const routes = (app) => {
    app.route('/login')
        // .get(getUsers)
        // .delete(deleteUser)
        // .post(userSignup)
    .post(login)
       
    app.route('/signup')
    .post(Signup)
    // .post(userSignin)
    // .post(addNewUser)
    
        app.post('/signup', [
            check('email').isEmpty().trim(),
          
            check('password').isEmpty().trim(),
            check('confirmpassword').isEmpty().trim()
            ], addNewUser, (req, res) => {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
            }
            
            User.create({
                email: req.body.email,
           
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
            }).then(user => res.json(user));
            });
    // app.route('/access/:id')
    //     .get(getUser)
    //     .put(updateUser)
       
}
 
export default routes

// const express = require('express'); 
// const router = express.Router(); 
  
// // importing User Schema 
// const User = require('../models/signupmodel'); 
  
// // user login api 
// router.post('/login', (req, res) => { 
//     // find user with requested email 
//     User.findOne({ email : req.body.email }, function(err, user) { 
//         if (user === null) { 
//             return res.status(400).send({ 
//                 message : "User not found."
//             }); 
//         } 
//         else { 
//             if (user.validPassword(req.body.password)) { 
//                 return res.status(201).send({ 
//                     message : "User Logged In", 
//                 }) 
//             } 
//             else { 
//                 return res.status(400).send({ 
//                     message : "Wrong Password"
//                 }); 
//             } 
//         } 
//     }); 
// }); 
  
// // user signup api 
// router.post('/signup', (req, res, next) => { 
     
//  // creating empty user object 
//     let newUser = new User(); 
  
//     // intialize newUser object with request data 
//     newUser.name = req.body.name, 
  
//     newUser.email = req.body.email 
//                     // call setPassword function to hash password 
//                     newUser.setPassword(req.body.password); 
  
//     // save newUser object to database 
//     newUser.save((err, User) => { 
//         if (err) { 
//             return res.status(400).send({ 
//                 message : "Failed to add user."
//             }); 
//         } 
//         else { 
//             return res.status(201).send({ 
//                 message : "User added succesfully."
//             }); 
//         } 
//     }); 
// }); 
  
// // export module to allow it to be imported in other files 
// module.exports = router; 