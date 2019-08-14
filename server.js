import express from 'express'
import routes from './src/Routes/signuproute'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
import productRoute from './src/Routes/productroute';

const app = express()
const PORT = 3008


app.use(require("body-parser").text());
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingwebsite')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
app.use('/product',productRoute);
routes(app)
 
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

  
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})