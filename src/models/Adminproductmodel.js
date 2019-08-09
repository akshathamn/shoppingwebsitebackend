const mongoose = require('mongoose');
const { Schema } = mongoose;

let AdminproductSchema = new Schema({
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
  
  }
  });
  export default AdminproductSchema;
// module.exports = mongoose.model('AdminproductSchema', AdminproductSchema);