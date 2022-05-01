const { response } = require('express');
const express = require('express');
const router=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('../database/connect');
const User = require('../model/userSchema');




router.get('/',(req,res)=>{
    res.send("hello get");
});




router.post('/register',(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){

        return res.status(422).json({
            msg:"Please fill all field properly"
        });
    }

    User.findOne({email:email})
      .then((userExist)=>{

        if(userExist)
        {
            return res.status(422).json({
                msg:"User already register"
            });
        }

        else if(password != cpassword)
        {
            return res.status(422).json({
                msg:"Password are not matching"
            });
        }

        else{

          


            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if (err) {  // first check error
                    return res.status(500).json({
                        error: err
                    })
                }


                else{

                    const user = new User({ // if not

                       
                        name: req.body.name,
                        password: hash,  // make password hash
                        cpassword:hash,
                        email: req.body.email,
                        phone: req.body.phone,
                        work: req.body.work,
        
                    })



                    user.save().then(()=>{
    
                        res.status(201).json({
                            msg:"User register successfully"
                        });
                    })



                }


            })


            

        }

      }).catch(err =>{ console.log(err)});


});


router.post('/signin',async(req,res)=>{

    try{

     

        const { email , password } = req.body;

        if( !email || !password){
            return res.status(400).json({
                msg:"Please fill all data correctly"
            });
        }

        const userLogin = await User.findOne({email:email});

       // console.log(userLogin);

       if(userLogin)
       {

        const isMatch = await bcrypt.compare(password,userLogin.password);


        const token = await userLogin.generateAuthToken();
 
       //  console.log(token);

         res.cookie("jwttoken",token,{
             expires:new Date(Date.now() + 100000),
             httpOnly:true
         });



        if(!isMatch){
            res.status(400).json({  msg:"Invalid data"   })
                   
        }

        else{
            res.json({ msg:"User sign successfully"});
        }


       }
       else{

        res.status(400).json({  msg:"Invalid data"   })
        
       }

      

    }

    catch(err){

        console.log(err);
    }
})





module.exports=router;