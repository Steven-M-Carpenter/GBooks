import React from "react";
import "./style.css";


function Results({ children }) {
  return (
    <section className="ml-4 mr-4 mb-4" >
      <div className="container-fluid pl-3 pr-3 border border-dark rounded">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-group"> {children} </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;