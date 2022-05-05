import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../images/login.png";

const Login = () => {

  

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const loginUser = async(e)=>{
  e.preventDefault();


  const res = await fetch("/signin",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
       email , password 
    })

  });


  const data = await res.json();

  if(res.status === 400 || !data){
    window.alert("Invalid Credentials");
    console.log("Invalid Credentials");
  }

  else{
    window.alert("Login Successfully");
    console.log("Login Successfully");
  }

 


}


  return (
    <>
      <div className="card-container">
        <div className="float-layout">
          <div className="card-image">
            <div className="card" style={{float:"right"}}>
              <div className="container1 white z-depth-2 mt-2">
                <ul className="tabs teal" style={{ display: "flex" }}>
                  <li className="tab col s3">login</li>
                  <li className="tab col s3">
                    <Link className="white-text" to="/register">
                      register
                    </Link>
                  </li>
                </ul>

                <div id="login" className="col s12">
                  <form method="POST" className="col s12">
                    <div className="form-container1">
                      <h3 className="teal-text">Hello</h3>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate"  name="email" 
                           value={email}
                           onChange={(e)=> setEmail(e.target.value)}
                            />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password"
                            type="password"
                            className="validate"
                            name="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>

                      <br />
                      <center>
                    
                        <input type="submit" name="signup" id="signup" className="button1" 
                        value="Login" onClick={loginUser} />

                        <br />
                        <br />
                        <Link to="/register">Don't have account ?</Link>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <img src={login} alt="test" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
