//This is the title area for the page
//
import React from "react";
import "./style.css";


function Title() {
  return (
    <header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">(React) Google Book Search</h1>
          <p className="lead">Search and save books of interest</p>
        </div>
      </div>
    </header>
  );
};


export default Title;