import React from "react";
import { Link } from "react-router-dom";
import login from "../images/login.png";

const Login = () => {
  return (
    <>
      <div class="card-container">
        <div class="float-layout">
          <div class="card-image">
            <div class="card">
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
                  <form className="col s12">
                    <div className="form-container1">
                      <h3 className="teal-text">Hello</h3>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label for="email">Email</label>
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

                      <br />
                      <center>
                        <a href="/" className="button1">
                          {" "}
                          Login
                        </a>
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
