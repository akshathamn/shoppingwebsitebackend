import express from 'express'
import routes from './src/Routes/signuproute'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
import productRoute from './src/Routes/productroute'

// const productRoute = require('../Routes/productroute');

 
const app = express()
const PORT = 3008
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingwebsite')
// mongoose.connect('mongodb://user:password@ds239648.mlab.com:39648/db_name')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
app.use('/product',productRoute);


routes(app)
 
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})