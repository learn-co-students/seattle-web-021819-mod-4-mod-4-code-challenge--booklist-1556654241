import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      shelf: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
     .then(resp => resp.json())
     .then(data => this.setState({
       books: data
     }))
  }

  addBook = (book) => {
    if(!this.state.shelf.includes(book)) {
      this.setState({
        shelf: [...this.state.shelf, book]
      })
    }
  }

  addNewBook = (book) => {
    this.setState({
      books: [...this.state.books, book]
    })
  }

  removeBook = (book) => {
    this.setState({
      shelf: this.state.shelf.filter(object => object !== book)
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBook={this.addBook} addNewBook={this.addNewBook}/>
        <Bookshelf shelf={this.state.shelf} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
