import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BtnSave(props) {
  console.log("props = " + JSON.stringify(props));
  return (
  // <div className="col-lg-1">
    <button className="btn btn-dark btn-sm mb-0 mt-1 float-left" {...props} type="button">Save</button>
  // </div>
  );
}
console.log("button save initialized");
export default BtnSave;