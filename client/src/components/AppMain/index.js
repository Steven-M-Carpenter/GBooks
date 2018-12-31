//This is the main game area which will likely have most of the logic and pulls everything together
//**It will manage state so it will need to be a class.
//
import React from "react";
import "./style.css";

import Search from "../Search";
import Results from "../Results";
import ResultsItem from "../ResultsItem";
import API from "../../utils/API";
import BtnSave from "../BtnSave";
import BtnView from "../BtnView";
// import Search from "../../components/Search";
// import Results from "../../components/Results";
// import ResultsItem from "../../components/ResultsItem";
// import API from "../../utils/API";
// import BtnSave from "../../components/BtnSave";
// import BtnView from "../../components/BtnView";


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


  saveClicked = key => {
    console.log("save clicked = " + key);
    const bookData = this.state.books.map(book => {
      const currentBook = { ...book };
      let saveKey = (book.id);
      let saveTitle = (book.volumeInfo.title || "No Title");
      let saveAuthors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
      let saveDescription = (book.volumeInfo.description || "No description");
      let saveImage = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
      let saveLink = (book.volumeInfo.canonicalVolumeLink || "Unknown");
      if (currentBook.id === key) {
        console.log("currentBook ID = the key supplied");
        console.log("book = " + JSON.stringify(book));
        API.saveBook({
          key: saveKey,
          title: saveTitle,
          authors: saveAuthors,
          description: saveDescription,
          image: saveImage,
          link: saveLink
        })
          .then(res => console.log("Ran add step!"))
          .catch(err => console.log(err));
        // .then(res => this.loadBooks())
      };
      return bookData
    });
  };


  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.bookSearch);
  };


  deleteClicked = (key) => {
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
        <Results>
          {this.state.books.map(book => {
            let id = (book.id);
            let title = (book.volumeInfo.title || "No Title");
            let authors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
            let description = (book.volumeInfo.description || "No description");
            let image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
            let link = (book.volumeInfo.canonicalVolumeLink || "Unknown");
            console.log("book.authors === " + JSON.stringify(authors));
            return (
              <div>
                <ResultsItem
                  key={id}
                  title={title}
                  authors={authors}
                  description={description}
                  image={image}
                  link={link}
                />
                {/* <BtnSave name={"steve"} onClick={() => this.saveClicked(id)} location={"here"} /> */}
                {/* <BtnSave name={"steve"} onClick={() => this.saveClicked(id)} location={"here"} /> */}
                {/* <BtnSave onClick={() => this.saveClicked(book.id)} /> */}
                <BtnSave onClick={() => this.saveClicked(id)} />
                <BtnView link={link} />
              </div>
            );
          })}
        </Results>
      </div>
    );
  };
};


export default AppMain;