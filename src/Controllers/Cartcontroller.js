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