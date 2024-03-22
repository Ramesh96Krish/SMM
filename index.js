const mongoose= require('mongoose');
const config=require('./utils/config');
console.log('Connecting to MongoDb..');
mongoose.connect(config.MongoDb_Uri) // Connected DB with index file 
.then(()=>{
    console.log('Connected to MongoDB...');
})
.catch((error)=>{
  console.log('Error Connecting to MongoDB..:', error.message);
})      