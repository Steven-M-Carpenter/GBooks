import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BtnDelete(props) {
  return (
    <button type="button" {...props} className="BtnDelete btn btn-dark btn-sm mb-0 mt-1 float-left">Delete</button>
  );
}

export default BtnDelete;