import React from "react";
import "./style.css";

function BtnView(props) {
  return (
      <a href={props.link} className="BtnView btn btn-dark btn-sm mb-0 mt-1" role="button">View</a>
  );
}

export default BtnView;