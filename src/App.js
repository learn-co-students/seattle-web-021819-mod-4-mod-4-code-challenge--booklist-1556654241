import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const URL = 'http://localhost:3005/books';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      bookshelf: []
    }

    this.handleBookAddClick = this.handleBookAddClick.bind(this);
    this.handleBookRemoveClick = this.handleBookRemoveClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  handleBookAddClick(book) {
    if (this.state.bookshelf.includes(book)) return
    this.setState({
      bookshelf: [...this.state.bookshelf, book]
    })
  }

  handleBookRemoveClick(removedBook) {
    this.setState({
      bookshelf: this.state.bookshelf.filter(book => book !== removedBook)
    })
  }

  handleFormSubmit(newBook) {
    let newBookList = [...this.state.books, newBook]
    this.setState({
      books: newBookList
    })
  }

  render() {
    const { books, bookshelf } = this.state

    return (
      <div className="book-container">
        <BookList
          books={books}
          handleBookClick={this.handleBookAddClick}
          handleFormSubmit={this.handleFormSubmit} />
        <Bookshelf
          bookshelf={bookshelf}
          handleBookClick={this.handleBookRemoveClick} />
      </div>
    );
  }
}

export default App;
