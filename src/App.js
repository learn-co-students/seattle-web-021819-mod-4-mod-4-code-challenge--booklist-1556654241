import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor() {
    super()
    this.state = {
      allBooks: [],
      bookShelf: []
    }
    this.fetchBooks = this.fetchBooks.bind(this)
    this.handleBookListClick = this.handleBookListClick.bind(this)
    this.handleBookShelfClick = this.handleBookShelfClick.bind(this)
  }


  componentDidMount() {
    this.fetchBooks()
  }


  fetchBooks() {
    let url = "http://localhost:3005/books";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      this.setState({allBooks: data})
    })
  }


  handleBookListClick(book) {
    // console.log("click detected on BookList book!")
    if (!this.state.bookShelf.includes(book)) {
      this.setState({bookShelf: [...this.state.bookShelf, book]})
    }
  }


  handleBookShelfClick(book) {
    let newBookShelf = [...this.state.bookShelf].filter(shelfBook =>
      shelfBook !== book
    )
    this.setState({bookShelf: newBookShelf})
  }


  createBook = (obj) => {
    this.setState({allBooks: [...this.state.allBooks, obj]})
  }


  render() {
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} handleClick={this.handleBookListClick} createBook={this.createBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} handleClick={this.handleBookShelfClick}/>
      </div>
    );
  }
}

export default App;
