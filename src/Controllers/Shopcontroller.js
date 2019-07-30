import mongoose from 'mongoose'
import shopSchema from '../models/Shopmodel'
const Shop = mongoose.model('Shop', shopSchema)
exports.createShop = function(req, res) {
var new_data = new Shop(req.body);
new_data.save(function(err, data) {
if (err)
res.send(err);
res.json(data);
});
};


exports.getshop=(req, res) => {
         console.log("hii")
         Shop.find({}, (error, shop) => {
            if (error) { res.json(error) }
         res.json(shop)
        })
     }