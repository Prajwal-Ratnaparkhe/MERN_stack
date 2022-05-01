const mongoose = require('mongoose');


const DB= process.env.DATABASE; 



mongoose.connect(DB).then(()=>{

    console.log("Database connection successfully"); // if connection establish
})
.catch((err) =>  console.log("Database connection error"));  // if connection not establish