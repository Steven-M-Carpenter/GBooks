//This is the main game area which will likely have most of the logic and pulls everything together
//**It will manage state so it will need to be a class.
//
import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Title from "../Title";
//import Search from "../Search";
//import Results from "../Results";
//import ResultsItem from "../ResultsItem";
// import BtnDelete from "../BtnDelete";
import API from "../../utils/API";
// import BtnSave from "../BtnSave";
import BtnDelete from "../BtnDelete";
import BtnView from "../BtnView";


class AppDetail extends React.Component {
  state = {
    book: [],
  };

  // componentDidMount() {
  //   this.searchBooks("Moby Dick");
  // }
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }


  // searchBooks = query => {
  //   const res = axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  //   .then(function(res) {
  //     const output = res.data;
  //     console.log("output = " + JSON.stringify(output));
  //     return output;
  //   });
  //   //   // .then(res => this.setState({ books: res.data }))
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.log(err));
  // };


  searchBooks = query => {
    API.search(query)
      .then(res => {
        this.setState({ books: res.data.items })
      })
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    // console.log("boox = " + JSON.stringify(this.state.books));
  };


  saveClicked = (key) => {
    // event.preventDefault();
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
    });
    return bookData
  };



  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.bookSearch);
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleViewButton = event => {
  //   event.preventDefault();
  //   this.searchBooks(this.state.bookSearch);
  // };


  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleSaveButton = (input) => {
  //   // event.preventDefault();
  //   console.log("In HandleSave Function");
  //   console.log("Book Key = " + JSON.stringify(input));
  //   let key = (input.id);
  //   let title = (input.volumeInfo.title || "No Title");
  //   let authors = ((input.volumeInfo.authors) ? input.volumeInfo.authors.join(", ") : "None listed");
  //   let description = (input.volumeInfo.description || "No description");
  //   let image = ((input.volumeInfo.imageLinks) ? input.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
  //   let link = (input.volumeInfo.canonicalVolumeLink || "Unknown");
  //   API.saveBook({
  //     key: key,
  //     title: title,
  //     authors: authors,
  //     description: description,
  //     image: image,
  //     link: link
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  //   // return res;
  // };
  // return bookData;

  // const saveBook = {
  //   key: currentBook.id,
  //   title: currentBook.title,
  //   authors: currentBook.authors,
  //   description: currentBook.description,
  //   image: currentBook.image,
  //   link: currentBook.link
  // };
  // };
  // }; 
  // return saveBook;
  // });
  // };

  //   API.saveBook({
  //     key: this.state.id,
  //     title: this.state.title,
  //     authors: this.state.authors,
  //     description: this.state.description,
  //     image: this.state.image,
  //     link: this.state.link
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };


  // renderPage = () => {
  //   if (this.state.books.length) {
  //     for (let i = 0; i < this.state.books.length; i++) {
  //       console.log("record = " + JSON.stringify(this.state.books[i]));
  //       console.log("title = " + this.state.books[i].volumeInfo.title);
  //       console.log("authors = " + this.state.books[i].volumeInfo.authors);
  //       console.log("desc = " + this.state.books[i].volumeInfo.description);
  //       console.log("image = " + this.state.books[i].volumeInfo.imageLinks.smallThumbnail);
  //       console.log("link = " + this.state.books[i].volumeInfo.canonicalVolumeLink);
  //     };
  //     console.log("books length = " + this.state.books.length);
  //     this.state.books.map(book => {
  //       return (
  //         <ResultsItem
  //           key={book.id}
  //           title={book.volumeInfo.title}
  //           authors={book.volumeInfo.authors}
  //           description={book.volumeInfo.description}
  //           image={book.volumeInfo.imageLinks.smallThumbnail}
  //           link={book.volumeInfo.canonicalVolumeLink}
  //         />
  //       )
  //     }
  //     );
  //   } else {
  //     return (
  //       <Results>
  //         <h3>No Results to Display</h3>
  //       </Results>
  //     );
  //   }
  // };

  render() {
    return (
      <div>
        {/* <NavBar />
        <Title /> */}
        <Search
          value={this.state.bookSearch}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Results>
          {this.state.books.map(book => {
            let key = (book.id);
            let title = (book.volumeInfo.title || "No Title");
            let authors = ((book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "None listed");
            let description = (book.volumeInfo.description || "No description");
            let image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "../../assets/images/NoImage.jpg");
            let link = (book.volumeInfo.canonicalVolumeLink || "Unknown");
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
                {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                <BtnSave onClick={() => this.saveClicked(key)} /><BtnView link={link}/>
              </div>
            );
          })}
        </Results>

        {/* <Header
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Instr />
        <Container>
          {this.state.dinos.map(dino => (
            <DinoCard
              key={dino.id}
              id={dino.id}
              clicked={dino.clicked}
              name={dino.name}
              image={dino.image}
              dinoClicked={this.dinoClicked}
            />
          ))};
          </Container>
          <Footer /> */}

      </div>
    );
  };
};

export default AppMain;
