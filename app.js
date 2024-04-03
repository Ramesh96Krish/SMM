//Require Express
const express=require ('express');

//Create a new express App
const app=express();

//Import Cors
const cors=require('cors');
const userRouter = require('./routes/userRoutes');

//use the cors  middleware
app.use(cors());

//use the express.json middleware
app.use(express.json());

//Define Endpoints
app.use('/api/users', userRouter);

//export the app
module.exports = app;