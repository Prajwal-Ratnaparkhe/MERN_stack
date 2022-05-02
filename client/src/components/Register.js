import React from "react";
import { Link } from "react-router-dom";
import signup from "../images/signup.jpg";

const Register = () => {
  return (
    <>
      <div className="body" style={{ backgroundColor: "#c9ccd1" }}>
        <div className="container white z-depth-2 mt-2">
          <ul className="tabs teal" style={{ display: "flex" }}>
            <li className="tab col s3">register</li>
            <li className="tab col s3">
              <Link className="white-text active" to="/login">
                login
              </Link>
            </li>
          </ul>

          <center>
            <div className="col-md-6 d-none d-md-block my-2">
              <img
                src={signup}
                alt="test"
                className="img-fluid"
                style={{ minHeight: "100%" }}
              />
            </div>
          </center>

          <div id="register" className="col s12">
            <form className="col s12">
              <div className="form-container">
                {/* <h3 className="teal-text">Welcome</h3> */}
                <div className="row">
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
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
                    <input id="phone" type="number" className="validate" />
                    <label for="phone">Phone</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input id="work" type="text" className="validate" />
                    <label for="work">Work</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
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
                    <label for="password-confirm">Password Confirmation</label>
                  </div>
                </div>
                <center>
                  <button
                    className="btn waves-effect waves-light teal"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Register;
