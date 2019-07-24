import { addNewUser, getUsers, Signup,login}  from '../Controllers/signupcontroller'
import{createProduct} from '../Controllers/Addproductcontroller'
// const { check, validationResult  } = require('express-validator/check')

const routes = (app) => {
    app.route('/login')
        // .get(getUsers)
       
    .post(login)
       
    app.route('/signup')
    .post(Signup)


    app.route('/product')
.post(createProduct)
 
    // .post(addNewUser)
    
        // app.post('/signup', [
        //     check('email').isEmpty().trim(),
          
        //     check('password').isEmpty().trim(),
        //     check('confirmpassword').isEmpty().trim()
        //     ], addNewUser, (req, res) => {
            
        //     const errors = validationResult(req);
        //     if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.array() });
        //     }
            
        //     User.create({
        //         email: req.body.email,
           
        //     password: req.body.password,
        //     confirmpassword: req.body.confirmpassword
        //     }).then(user => res.json(user));
        //     });
   
    
       
}





 
export default routes

