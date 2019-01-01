import React from "react";
import "./style.css";

function BtnSave(props) {
  return (
    <button id={props.id} className="btn btn-outline-dark btn-sm mb-2 mt-0 ml-4 mr-2 float-left" onClick={props.saveClicked} type="button">Save</button>
  );
}
export default BtnSave;