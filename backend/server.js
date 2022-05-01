const http = require('http');
const app= require("../backend/app");
const server = http.createServer(app);
const dotenv =require('dotenv');

dotenv.config({path:'./config.env'}); // add config file location
const PORT =process.env.PORT;



 

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `);
});