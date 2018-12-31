import React from "react";
import "./style.css";


export function ResultsItem({
  // key,
  title,
  authors,
  description,
  image = "https://placehold.it/150x100",
  link,
  handleSaveButton
}) {
  return (
    <li className="list-group-item border-0 my-3">
      <div className="row">
        <div className="container-fluid">
          <div className="titleRow row align-middle">
            <div className="col-lg-10 align-middle">
              <h3 className="titleLine"><u>{title}</u></h3>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-11">
              <h5 className="pl-1"><i>{authors}</i></h5>
              <img className="float-left mr-3 border border-dark" src={image} height="150px" width="100px" alt="Meainingful text" />
              <p className="pl-0">{description}</p>
            </div>
          </div>
        </div >
      </div >
    </li >
  );
}


export default ResultsItem;