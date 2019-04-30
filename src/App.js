import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const bookUrl = "http://localhost:3005/books"

class App extends Component {

  constructor(){
    super()
    this.state = {
      allBooks: [],
      displayBooks: [],
      myBooks: []
    }
  }

  componentDidMount(){
    fetch(bookUrl)
    .then(response => response.json())
    .then(data => {this.setState({
      allBooks: data,
      displayBooks: data
      })
    })
  }

  addBook = (book) => {
    if(this.state.myBooks.includes(book)){
      alert('Already Added Book')
    } else {
      this.setState({
        myBooks: [...this.state.myBooks, book]
      })
    }
  }

  removeBook = (book) => {
    let currentBooks = this.state.myBooks
    let index = currentBooks.indexOf(book)
    let removed = currentBooks.splice(index, 1)
    this.setState({
      myBooks: currentBooks
    })
  }

  buyBook = (book) => {
    this.setState({
      displayBooks: [...this.state.displayBooks, book]
    })
  }

  render() {
    const {allBooks, displayBooks, myBooks} = this.state
    return (
      <div className="book-container">
        <BookList
          displayBooks={displayBooks}
          addBook={this.addBook}
          buyBook={this.buyBook}
        />
        <Bookshelf
          myBooks={myBooks}
          removeBook={this.removeBook}
        />
      </div>
    );
  }
}

export default App;
