import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const URL = "http://localhost:3005/books"

class App extends Component {

  constructor(){
    super()
    this.state = {
      books: [],
      myBooks: [],
      title: "",
      author: "",
      img: ""
    }
  }

componentDidMount(){
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      books: data
    })
  })
}

addBook = (book) => {
  if(!this.state.myBooks.includes(book))
  this.setState({
    myBooks: [...this.state.myBooks, book]
  })
}

removeBook = (book) => {
  const newBooks = this.state.myBooks.filter((bb)=> {
    return bb !== book
  })
  this.setState({
    myBooks: newBooks
  })
}

createBookTitle = (event) => {
  this.setState({
    title: event.target.value,
  })
}

createBookAuthor = (event) => {
  this.setState({
    author: event.target.value,
  })
}

createBookImg = (event) => {
  this.setState({
    img: event.target.value,
  })
}

handleSubmit = (event) => {
  event.preventDefault()
}

  render() {

const {books, myBooks, title, author, img} = this.state

    return (
      <div className="book-container">
        <BookList
          books={books}
          addBook={this.addBook}
          title={title}
          author={author}
          img={img}
          createBookTitle={this.createBookTitle}
          createBookAuthor={this.createBookAuthor}
          createBookImg={this.createBookImg}
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
