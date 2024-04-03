require('dotenv').config();
const MongoDb_Uri=process.env.Mongodb_URI;
const Port=process.env.Port;
const jwt_secret=process.env.jwt_secret;

module.exports ={
    MongoDb_Uri,
    Port,
    jwt_secret
};