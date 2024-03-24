require('dotenv').config();
const MongoDb_Uri=process.env.Mongodb_URI;
const Port=process.env.Port;
module.exports ={
    MongoDb_Uri,
    Port
};