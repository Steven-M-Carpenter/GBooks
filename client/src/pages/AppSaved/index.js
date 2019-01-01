//This is the main element for interacting with saved records
//It will manage state so it needs to be a class.
//
import React from "react";
import "./style.css";

import Results from "../../components/Results";
import ResultsItem from "../../components/ResultsItem";
import API from "../../utils/API";
import BtnDelete from "../../components/BtnDelete";
import BtnView from "../../components/BtnView";


class AppSaved extends React.Component {
  state = {
    books: []
  };

  
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data, key: "", title: "", authors: "", description: "", image: "", link: "" }))
      .catch(err => console.log(err));
  }


  loadBooks = () => {
    API.getBooks()
    .then(res => this.setState({ books: res.data, key: "", title: "", authors: "", description: "", image: "", link: "" }))
    .catch(err => console.log(err));
  };


  deleteClicked = event => {
    const bookDataId = event.target.id;
    API.deleteBook(bookDataId)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
};
  // };

  
  render() {
    return (
      <div>
        <Results>
          {this.state.books.map(book => {
            let key = (book.key);
            let title = (book.title);
            let authors = (book.authors);
            let description = (book.escription);
            let image = (book.image);
            let link = (book.link);
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
                <BtnDelete id={book._id} deleteClicked={this.deleteClicked} />
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