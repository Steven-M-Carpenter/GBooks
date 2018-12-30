//This is the search area for the page
//
import React from "react";
import "./style.css";



function Search(props) {
  return (
    <section className="ml-4 mr-4 mb-4" >
      <div className="container-fluid pl-3 pr-3 border border-dark rounded">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="bookText mt-3 mb-3 ml-2">Enter a book title</h5>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <input 
                onChange={props.handleInputChange} 
                className="form-control mb-3 mt-3" 
                id="bookSearch" 
                name="bookSearch"
                type="text" 
                placeholder="Search term">
                </input>
              <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success mb-3 mt-3 float-right">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Search;