const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');

   

dotenv.config({path:'./config.env'}); // add config file location
require('../backend/database/connect'); // add database folder path  for simplicity just for reuse code

 


const User = require('../backend/model/userSchema');  // add user schema file path after database conneection


app.use(express.json());

 
 app.use(require('./routes/auth'));  // link routes file



app.get('/',(req,res)=>{
     //  console.log("Hello home page");
    res.send("Hello home page");
});


app.get('/about',(req,res)=>{
  
    res.send("Hello about page");
});

app.get('/contact',(req,res)=>{
  
    res.send("Hello contact page");
});

  
app.get('/signup',(req,res)=>{
  
    res.send("Hello signup page");
});


app.get('/signin',(req,res)=>{
  
    res.send("Hello signin page");
});








app.use((req,res,next)=>{
    res.status(401).json({
        msg:"Bad URL Request"
    })
})


module.exports=app;