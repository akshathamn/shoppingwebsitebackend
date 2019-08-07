import mongoose from 'mongoose'
import cartSchema from '../models/Cartmodel'
const Cart = mongoose.model('Cart', cartSchema)
exports.createCart = function(req, res) {
var new_data = new Cart(req.body);
new_data.save(function(err, data) {
if (err)
res.send(err);
res.json(data);
});
};

exports.getcart=(req, res) => {
    console.log("hii")
    Shop.find({}, (error, shop) => {
       if (error) { res.json(error) }
    res.json(shop)
   })
}


// exports.deletecart=(req, res) =>{
//    Shop.findByIdAndRemove({_id: req.params.id}, function(err, product){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
//   }


// cartRoutes.route('/delete/:id').get(function (req, res) {
//    Shop.findByIdAndRemove({_id: req.params.id}, function(err, product){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
//   });