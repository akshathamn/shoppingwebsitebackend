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














// const express = require('express');
// const router = express.Router();

// const Products = require('../models/Product');

// router.get('/', async (req, res) => {
//   const products = await Products.find({});
//   res.json({ products });
// });

// module.exports = router;


// const Validator = require("validator");
// const isEmpty = require("./is-empty");

// module.exports = function validateProductInput(data) {
//   let errors = {};

//   data.name = !isEmpty(data.name) ? data.name : "";
//   data.description = !isEmpty(data.description) ? data.description : "";
//   data.price = !isEmpty(data.price) ? data.price : "";

//   if (Validator.isEmpty(data.name)) {
//     errors.name = "Name field is required";
//   }

//   if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
//     errors.description = "Description must be between 10 and 300 characters";
//   }

//   if (Validator.isEmpty(data.description)) {
//     errors.description = "Description field is required";
//   }

//   if (Validator.isEmpty(data.price)) {
//     errors.price = "Price field is required";
//   }

//   return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };
