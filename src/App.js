import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const BOOK_URL = 'http://localhost:3005/books'

class App extends Component {
  constructor() {
    super()
    this.state = {
      booklist: [],
      bookshelf: []
    }
    this.addBookToShelf = this.addBookToShelf.bind(this)
    this.removeFromShelf = this.removeFromShelf.bind(this)
  }

  handleSubmit(event) {
    // event.preventDefault();
    console.log("on app page", event.target.value)
    console.log("submit button pressed")
    if (event.target.value === "title") {

    } else if (event.target.value === "author") {

    } else if (event.target.value === "img") {

    }
  }

  componentDidMount() {
    fetch(BOOK_URL)
    .then(resp => resp.json())
    .then(booklist => {
      this.setState({ booklist })
    })
  }

  addBookToShelf(book) {
    // if (this.state.bookshelf.includes(book)) return;
    console.log("on app: book added to bookshelf", book)
    this.setState({ bookshelf: [...this.state.bookshelf, book]})
  }

  removeFromShelf(bookToRemove) {
    const books = this.state.bookshelf.filter(book => {
      if (book === bookToRemove) {
        return false;
      }
      return true;
    })
    this.setState({ bookshelf: books })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          booklist={this.state.booklist}
          handleSubmit={this.handleSubmit}
          addBookToShelf={this.addBookToShelf}
        />
        <Bookshelf bookshelf={this.state.bookshelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
