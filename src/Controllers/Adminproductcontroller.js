import mongoose from 'mongoose'
import AdminproductSchema from '../models/Adminproductmodel'
const adminProduct = mongoose.model('adminProduct', AdminproductSchema)
exports.createadminProduct = function(req, res) {
var new_data = new adminProduct(req.body);
new_data.save(function(err, data) {
if (err)
res.send(err);
res.json(data);
});
};

exports.getadminproduct=function (req, res) {
    // var adminproduc = new adminProduct(req.body);
    adminProduct.find(function(err, products){
      if(err){
        console.log(err);
      }
      else {
        res.json(products);
      }
    });
  };

  exports.editadminproduct=function (req, res) {
    let id = req.params.id;
    adminProduct.findById(id, function (err, product){
      if(err){
        console.log(err);
      }
      else {
        res.json(product);
      }
    });
  };


  exports.deleteadminproduct= function (req, res) {
    adminProduct.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err){
          console.log(err);
        }
        
        else {
          res.json('Successfully removed');
        }
    });
  };


  exports.updateadminproduct=function (req, res) {
    adminProduct.findById(req.params.id, function(err, adminProduct) {
    if (!adminProduct)
      res.status(404).send("data is not found");
    else {
        adminProduct.title = req.body.title;
        adminProduct.price = req.body.price;
        adminProduct.image = req.body.image;
        adminProduct.description=req.body.description;

        adminProduct.save().then(adminProduct => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
};
