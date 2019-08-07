const express = require('express');
const productRoutes = express.Router();
// import productSchema from '../models/Addproductmodel';
// Require Business model in our routes module
let productSchema = require('../models/Addproductmodel');

// // Defined store route
productRoutes.route('/addproduct').post(function (req, res) {
  let product = new productSchema(req.body);
  console.log(req.body)
  product.save()
    .then(product => {
      res.status(200).json({'product': 'product is added successfully'});
      res.json(product);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/getproduct').get(function (req, res) {
  // let product = new productSchema();
   productSchema.find(function(err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
  productSchema.findByIdAndRemove({_id: req.params.id}, function(err, product){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
// productRoutes.route('/update/:id').post(function (req, res) {
//     product.findById(req.params.id, function(err, product) {
//     if (!product)
//       res.status(404).send("data is not found");
//     else {
//         product.title = req.body.title;
//         product.price = req.body.price;
//         product.image = req.body.image;
//         product.description=req.body.description;

//         product.save().then(product => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });


module.exports = productRoutes;