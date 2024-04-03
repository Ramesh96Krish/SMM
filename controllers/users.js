const User=require('./models/user');
const bcrypt=require('bcrypt');
const { config } = require('dotenv');
const jwt=require('jsonwebtoken');
const config=require('../utils/config');

//to have an edge over the Request Handler
const userController= {
    signup:async (request, response)=>{
        try{
            // get the username and info from the Signup request 
            const {username, name, password}=response.body;
            console.log(body);
            response.json({message : "user Signup"});
            //check if the user already exist 
            const user=await user.findOne({username});
            // if the User already exist
            if(user){
                return response.status(400).json({error: 'Username already exists'});
            }
            //if the username is unique, Create a new User
            //hash the password
            const passswordHash=await bcrypt.hash(password,10);
            const NewUser=new User({
                username,
                name,
                passwordHash,
            });
            //save the user to the database
            const savedUser=await NewUser.save();
            //return the saved User;
            response.json({message: 'user created', user:savedUser});
        }
        catch(error){
            response.status(500).json({error:error.message})
        }
    },
signin: async(request, response)=>{
    try{
// get the Username & Password
const {username, password} = request.body;
// check if the user exists in the Database
const user=await User.findOne({username});
// if the user not exists, return an error message
if(!user){
    return response.status(400).json({
    error: 'User does not exist'})
}
// If the user exists , Compare the Password if correct
const passwordMatch=await bcrypt.compare(password, user.passwordHash);
// if hte password is incorrect, return an error
if(!passwordMatch){
    return response.json({error: 'incorrect Password'});
}
//If the Password is correct, return a token
const token=jwt.sign({
    id: user.id,
    username: user.username
}, config.jwt_secret);
response.json({message: 'User Signed In', token});
    }catch(error){
        response.status(500).json({error:error.message})
    }
}
}
module.exports=userController;