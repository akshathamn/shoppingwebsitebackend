import { addNewUser, getUsers, Signup,login,getAllLogin}  from '../Controllers/signupcontroller'
// import{createProduct} from '../Controllers/Addproductcontroller'
import{createShop,getshop} from '../Controllers/Shopcontroller'
import{createCart,getcart,deletecart} from '../Controllers/Cartcontroller'
import{createadminProduct,getadminproduct,editadminproduct,deleteadminproduct,updateadminproduct} from '../Controllers/Adminproductcontroller'
var isAuth=require('../middleware/isAuth')

const routes = (app) => {
    app.route('/login')
        .get(isAuth,getAllLogin )
        .post(login)
       
    app.route('/signup')
        .post(Signup)
    
    app.route('/shop')
       .post(createShop)
       .get(getshop)
 
    app.route('/cart')
       .post(createCart)
       .get(getcart)
// .delete(deletecart)

    app.route('/adminproduct')
       .post(createadminProduct)
       .get(getadminproduct)
       .put(editadminproduct)


    app.route('/adminproduct/:id')
       .delete(deleteadminproduct)
       .put(updateadminproduct)
}

export default routes

