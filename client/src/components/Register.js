import React from "react";
import { Link } from "react-router-dom";
import signup from "../images/signup.jpg";

const Register = () => {
  return (
    <>
      <div class="card-container">
        <div class="float-layout">
          <div class="card-image">
            <div class="card">
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
                  <form className="col s12">
                    <div className="form-container1">
                      {/* <h3 className="teal-text">Welcome</h3> */}
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            id="last_name"
                            type="text"
                            className="validate"
                          />
                          <label for="last_name">First Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label for="email">Email</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="phone"
                            type="number"
                            className="validate"
                          />
                          <label for="phone">Phone</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="work" type="text" className="validate" />
                          <label for="work">Profession</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password"
                            type="password"
                            className="validate"
                          />
                          <label for="password">Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password-confirm"
                            type="password"
                            className="validate"
                          />
                          <label for="password-confirm">
                            Password Confirmation
                          </label>
                        </div>
                      </div>
                      <center>
                        <a href="/" className="button1">
                          {" "}
                          Register
                        </a>
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
