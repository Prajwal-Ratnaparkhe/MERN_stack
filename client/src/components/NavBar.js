import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = () => {
  useEffect(() => {
  
    let sidenav = document.querySelector("#mobile-nav");
    M.Sidenav.init(sidenav, {});
  });

  return (
    <div>
      <nav className="red">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Web Zone
          </a>

          <a href="/" className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
