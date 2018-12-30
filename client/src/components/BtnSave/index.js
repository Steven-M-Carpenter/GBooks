import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BtnSave(props) {
  return (
  <div className="col-lg-1">
    <button type="button" {...props} className="BtnSave btn btn-dark btn-sm mb-0 mt-1 float-left">Save</button>
  </div>
  );
}

export default BtnSave;