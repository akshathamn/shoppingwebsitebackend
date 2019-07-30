const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
 quantity: {
    type: Number,
    required: true
  }
});

export default cartSchema;