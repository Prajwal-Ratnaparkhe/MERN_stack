import React from "react";
import { Link } from "react-router-dom";
import login from "../images/login.png";

const Login = () => {
  return (
    <>
      <div className="body " style={{ backgroundColor: "#c9ccd1" }}>
        <div className="container white z-depth-2 my-2">
          <ul className="tabs teal" style={{ display: "flex" }}>
            <li className="tab col s3">login</li>
            <li className="tab col s3">
              <Link className="white-text" to="/register">
                register
              </Link>
            </li>
          </ul>

          <center>
            <div className="col-md-6 d-none d-md-block my-2">
              <img
                src={login}
                alt="test"
                className="img-fluid"
                style={{ minHeight: "100%" }}
              />
            </div>
          </center>

          <div id="login" className="col s12">
            <form className="col s12">
              <div className="form-container">
                <h3 className="teal-text">Hello</h3>
                <div className="row">
                  <div className="input-field col s12 ">
                    <label for="email"></label>
                    <input
                      id="email"
                      placeholder="Enter Your Email"
                      type="email"
                      className="validate"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label for="password"></label>
                    <input
                      id="password"
                      placeholder="Enter Your Password"
                      type="password"
                      className="validate"
                    />
                  </div>
                </div>
                <br />
                <center>
                  <button
                    className="btn waves-effect waves-light teal"
                    type="submit"
                    name="action"
                  >
                    Connect
                  </button>
                  <br />
                  <br />
                  <a href="/">Forgotten password?</a>
                </center>
              </div>
            </form>
          </div>
        </div>

        <br />
      </div>
    </>
  );
};

export default Login;
