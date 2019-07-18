import express from 'express'
import routes from './src/Routes/signuproute'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

 
const app = express()
const PORT = 3005
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingwebsite')
// mongoose.connect('mongodb://user:password@ds239648.mlab.com:39648/db_name')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})