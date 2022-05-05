import React,{useState} from "react";
import { Link } from "react-router-dom";
import signup from "../images/signup.jpg";

const Register = () => {

const [user, setUser] = useState({
  name:"",email:"",phone:"",work:"",password:"",cpassword:""
});

let name,value;

const handelInputs = (e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;


  setUser({...user,[name]:value});

}


const postData = async (e)=>{

  e.preventDefault();
  const { name , email , phone ,work, password , cpassword }=user;

  const res = await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      name , email , phone, work , password , cpassword
    })

  });


  const data = await res.json();

  if(res.status === 422 || !data){
    window.alert("Please fill correct data");
    console.log("Please fill correct data");
  }

  else{
    window.alert("Registration Successfully");
    console.log("Registration Successfully");
  }


}

  return (
    <>
      <div className="card-container">
        <div className="float-layout">
          <div className="card-image">
            <div className="card">
              <div className="container1 white z-depth-2 mt-2">
                <ul className="tabs teal" style={{ display: "flex" }}>
                  <li className="tab col s3">register</li>
                  <li className="tab col s3">
                    <Link className="white-text active" to="/login">
                      login
                    </Link>
                  </li>
                </ul>

                <div id="register" className="col s12">
                  <form className="col s12" id="register-form"  method="POST">
                    <div className="form-container1">
                      {/* <h3 className="teal-text">Welcome</h3> */}
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            id="name"
                            type="text"
                            className="validate" 
                            name="name"
                            value={user.name}
                            onChange={handelInputs}
                          />
                          <label htmlFor="name"> Name</label>
                        </div>
                      </div>


                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" 
                          value={user.email}
                          onChange={handelInputs} 
                          name="email"/>
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="phone"
                            type="number"
                            className="validate" 
                            value={user.phone}
                            onChange={handelInputs}
                            name="phone"
                          />
                          <label htmlFor="phone">Phone</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="work" type="text" className="validate" 
                          value={user.work}
                          onChange={handelInputs}
                          name="work"
                          />
                          <label htmlFor="work">Profession</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password"
                            type="password"
                            className="validate" 
                            value={user.password}
                            onChange={handelInputs}
                            name="password"
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password-confirm"
                            type="password"
                            className="validate" 
                            value={user.cpassword}
                            onChange={handelInputs}
                            name="cpassword"
                          />
                          <label htmlFor="password-confirm">
                            Password Confirmation
                          </label>
                        </div>
                      </div>
                      <center>
                        {/* <a href="/" className="button1">
                          {" "}
                          Register
                        </a> */}


                        <input type="submit" name="signup" id="signup" className="button1" 
                        value="register" onClick={postData} />




                        <br />
                        <br />
                        <Link to="/login">Already have a account ?</Link>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <img src={signup} alt="test" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
