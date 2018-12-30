//This is the navbar for the page
//
import React from "react";
import "./style.css";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <a className="navbar-image d-inline-block align-top mr-2" href="/">
        <img src="/assets/images/GoogleGTransparent.png" width="30" height="30" alt="" />
      </a>
      <p className="navbar-brand mb-0 mr-5"> Books Deluxe</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link pt-3 ml-5 text-white" href="/">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link pt-3 ml-5 text-white" href="/">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;