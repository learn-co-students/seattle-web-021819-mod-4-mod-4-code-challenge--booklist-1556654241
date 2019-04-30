import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  // Constructor not needed, could've just done state={}
  constructor() {
    super();
    this.state = {
      books: [],
      bookshelf: []
    }
  }

  // Fetching books
  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => this.setState({ books: data }))
  }

  // Add book to bookshelf function used on <Book>
  // Passed from <BookList />
  addBook = (book) => {
    if (!this.state.bookshelf.includes(book)) {
      this.setState({ bookshelf: [...this.state.bookshelf, book] })
    }
  }

  // Remove book from bookshelf function used on <Book>
  // Passed from <Bookshelf />
  removeBook = (removeThisBook) => {
    let newBookshelf = this.state.bookshelf.filter(book => {
      return book !== removeThisBook;
    })
    this.setState({ bookshelf: newBookshelf })
  }

  // Handle new book from form
  handleNewBook = (state) => {
    console.log(state)
    let newBook = {
      title: state.title,
      author: state.author,
      img: state.img
    }
    this.setState({ books: [...this.state.books, newBook] })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          addBook={this.addBook}
          handleNewBook={this.handleNewBook}
        />
        <Bookshelf
          books={this.state.bookshelf}
          removeBook={this.removeBook}
        />
      </div>
    );
  }
}

export default App;
