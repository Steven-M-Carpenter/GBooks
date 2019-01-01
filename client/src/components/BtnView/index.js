import React from "react";
import "./style.css";

function BtnView(props) {
  return (
      <a href={props.link} className="BtnView btn btn-outline-dark btn-sm mb-2 mt-0 ml-2" role="button">View</a>
  );
}

export default BtnView;