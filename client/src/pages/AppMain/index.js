//This is the main element for the app's search feature 
//**It will manage state so it will need to be a class.
//
import React from "react";
import "./style.css";

import Search from "../../components/Search";
import Results from "../../components/Results";
import ResultsItem from "../../components/ResultsItem";
import API from "../../utils/API";
import BtnSave from "../../components/BtnSave";
import BtnView from "../../components/BtnView";


class AppMain extends React.Component {
  state = {
    books: [],
    bookSearch: ""
  };


  searchBooks = query => {
    API.search(query)
      .then(res => {
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  saveClicked = event => {
    event.preventDefault();
    const bookDataId = event.target.id;
    const bookData = this.state.books.map(book => {
      const currentBook = {...book};
      let saveKey = (book.id);
      let saveTitle = (book.volumeInfo.title || "No Title");
      let saveAuthors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
      let saveDescription = (book.volumeInfo.description || "No description");
      let saveImage = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
      let saveLink = (book.volumeInfo.canonicalVolumeLink || "Unknown");
      if (currentBook.id === bookDataId) {
        API.saveBook({
          key: saveKey,
          title: saveTitle,
          authors: saveAuthors,
          description: saveDescription,
          image: saveImage,
          link: saveLink
        })
          // .then(res => console.log("Ran add step!"))
          .then()
          .catch(err => console.log(err));
      };
      return bookData
    });
  };


  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.bookSearch);
  };


  deleteClicked = key => {
    console.log("delete clicked = " + key);
  };


  render() {
    return (
      <div>
        <Search
          value={this.state.bookSearch}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {/* <div className="border border-dark rounded px-2 py-2"> */}
        <Results>
          {this.state.books.map(book => {
            let id = (book.id);
            let title = (book.volumeInfo.title || "No Title");
            let authors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
            let description = (book.volumeInfo.description || "No description");
            let image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
            let link = (book.volumeInfo.canonicalVolumeLink || "Unknown");
            return (
              // <div className="border border-dark rounded px-2 py-2">
              <div>
                <ResultsItem
                  key={id}
                  title={title}
                  authors={authors}
                  description={description}
                  image={image}
                  link={link}
                />
                <BtnSave id={id} saveClicked={this.saveClicked} />
                <BtnView link={link} />
              </div>
            );
          })}
        </Results>
        {/* </div> */}
      </div>
    );
  };
};


export default AppMain;