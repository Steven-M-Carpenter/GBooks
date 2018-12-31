import axios from "axios";

export default {

  search: (query) => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },


  // search: (query) => {
  //   // const res = axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  //   axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  //   .then(function(response) {
  //     console.log(respsonse.data);
  //     console.log(respsonse.status);
  //     console.log(respsonse.statusText);
  //     console.log(respsonse.headers);
  //     console.log(respsonse.config);
  //     return response.data;
  //   });

  // console.log("response = " + JSON.stringify(response));
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    // return res;
  // },
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("Bookdata = " + JSON.stringify(bookData));
    return axios.post("/api/books", bookData);
  }
};
