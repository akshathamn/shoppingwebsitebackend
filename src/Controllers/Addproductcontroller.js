import mongoose from 'mongoose'
import productSchema from '../models/Addproductmodel'
const Product = mongoose.model('Product', productSchema)
exports.createProduct = function(req, res) {
var new_data = new Product(req.body);
new_data.save(function(err, data) {
if (err)
res.send(err);
res.json(data);
});
};