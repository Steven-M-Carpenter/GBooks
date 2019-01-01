import React from "react";
import "./style.css";

function BtnDelete(props) {
  return (
    <button id={props.id} className="BtnDelete btn btn-outline-dark btn-sm mb-2 mt-0 ml-4 mr-2 float-left" onClick={props.deleteClicked} type="button">Delete</button>
  );
}

export default BtnDelete;