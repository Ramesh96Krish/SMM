const mongoose= require('mongoose');
const config=require('./utils/config');
const app=require('./app');
console.log('Connecting to MongoDb..');
mongoose.connect(config.MongoDb_Uri) // Connected DB with index file 
.then(()=>{
    console.log('Connected to MongoDB...');
    //Start the server
    app.listen(config.Port, ()=>{
console.log('Server running on port ${config.port}');
    });
})
.catch((error)=>{
  console.log('Error Connecting to MongoDB..:', error.message);
})      