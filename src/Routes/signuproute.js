import { addNewUser, getUsers, Signup,login,getAllLogin}  from '../Controllers/signupcontroller'
// import{createProduct} from '../Controllers/Addproductcontroller'
import{createShop,getshop} from '../Controllers/Shopcontroller'
import{createCart} from '../Controllers/Cartcontroller'
// const { check, validationResult  } = require('express-validator/check')
var isAuth=require('../middleware/isAuth')

const routes = (app) => {
    app.route('/login')
        .get(isAuth,getAllLogin )
       
    .post(login)
       
    app.route('/signup')
    .post(Signup)
    


//     app.route('/product')
// .post(createProduct)

app.route('/shop')
.post(createShop)
.get(getshop)
 
app.route('/cart')
.post(createCart)
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

