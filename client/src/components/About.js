import React from "react";
import Tabs from "./Tabs";
import { useEffect } from "react";

const About = () => {


  const callAboutPage = async ()=>{

    try{
         const res = await fetch('/about',{

          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },

          credentials:"include"

         });

         const data = await res.json();
         console.log(data);


         if(!res.status === 200)
         {
           const error=new Error(res.error);

           throw error;

         }


    }
    catch(err)
    {
      console.log(err);
      window.alert("Login First");
    }
  }

useEffect(() => {
  
  callAboutPage();

}, [])




  return (
    <div> 
      <center>
        <div className="card">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="about-user"
            />
          </div>
          <div className="infos">
            <div className="name">
              <h2>Bradley Steve</h2>
            </div>
            <p className="text">
              I'm a Front End Developer, follow me to be the first who see my
              new work.
            </p>

            <Tabs />
            {/* <div className="links">
              <button className="view">View profile</button>
            </div> */}

            <a href="/" className="button">
              <span>View profile</span>
            </a>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
