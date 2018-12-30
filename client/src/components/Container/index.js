//This is the search area for the page
//
import React from "react";
import "./style.css";


// This Container component allows us to use a bootstrap container without worrying about class names
function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


export default Container;