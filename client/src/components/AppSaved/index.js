//This is the main game area which will likely have most of the logic and pulls everything together
//**It will manage state so it will need to be a class.
//
import React from "react";
import "./style.css";

import Results from "../Results";
import ResultsItem from "../ResultsItem";
import API from "../../utils/API";
import BtnDelete from "../BtnDelete";
import BtnView from "../BtnView";


class AppSaved extends React.Component {
  state = {
    books: []
  };

  
  componentDidMount() {
    API.getBooks()
      // .then(res => this.setState({ book: res.data }))
      .then(res => this.setState({ books: res.data, key: "", title: "", authors: "", description: "", image: "", link: "" }))
      .catch(err => console.log(err));
  }


  deleteClicked = (key) => {
    console.log("delete clicked = " + key);
  };

  
  render() {
    return (
      <div>
        <Results>
          {this.state.books.map(book => {
            let key = (book.key);
            // let title = (book.volumeInfo.title || "No Title");
            let title = (book.title);
            // let authors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
            let authors = (book.authors);
            // let description = (book.volumeInfo.description || "No description");
            let description = (book.escription);
            // let image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
            let image = (book.image);
            // let link = (book.volumeInfo.canonicalVolumeLink || "Unknown");
            let link = (book.link);
            // console.log("book.authors === " + JSON.stringify(authors));
            return (
              <div>
                <ResultsItem
                  key={key}
                  title={title}
                  authors={authors}
                  description={description}
                  image={image}
                  link={link}
                />
                <BtnDelete onClick={() => this.deleteClicked(key)} />
                <BtnView link={link}/>
              </div>
            );
          })}
        </Results>
      </div>
    );
  };
};


export default AppSaved;