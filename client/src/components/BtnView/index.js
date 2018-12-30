import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BtnView(props) {
  return (
    // <div className="col-lg-1">
    //   <button type="button" {...props} className="BtnView btn btn-dark btn-sm mb-0 mt-1">View</button>
    // </div>
    // <a {...props} href={link} className="BtnView btn btn-dark btn-sm mb-0 mt-1" role="button">View</a>
    <div className="col-lg-1">
      <a href={props.link} className="BtnView btn btn-dark btn-sm mb-0 mt-1" role="button">View</a>
    </div>
  );
}

export default BtnView;