//This is the search area for the page
//
import React from "react";
import "./style.css";


// This Row component lets us use a bootstrap row without having to think about class names
function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}


export default Row;