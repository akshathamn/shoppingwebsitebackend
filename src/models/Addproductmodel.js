const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

let productSchema = new Schema({
 title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }  ,
  description: {
    type: String,
    required: true
  
  },
  // {
  //   collection: 'product'
  

});

// export default productSchema;
module.exports = mongoose.model('productSchema', productSchema);