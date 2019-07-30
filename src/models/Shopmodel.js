const mongoose = require('mongoose');
const { Schema } = mongoose;
const shopSchema = new Schema({
   product_id: {
    type:Schema.Types.ObjectId,
    ref:'products',
    required:true
      }
    });
    
    export default shopSchema;
    // module.exports = mongoose.model('shops',shopSchema);

