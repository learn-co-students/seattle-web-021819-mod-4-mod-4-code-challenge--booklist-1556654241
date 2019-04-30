import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor(){
    super()
    this.addBook = this.addBook.bind(this)
    this.removeBook = this.removeBook.bind(this)
    this.addOrRemoveBook = this.addOrRemoveBook.bind(this)
    this.createBook = this.createBook.bind(this)
    this.state = {books: [], myBooks: []}
  }

  componentDidMount(){
    const URL = 'http://localhost:3005/books'
    fetch(URL)
      .then(resp => resp.json())
      .then(data =>
      this.setState({books: data}))
  }

  addBook(book){
    console.log(book)
    this.setState({myBooks: [...this.state.myBooks, book]})

  }

  removeBook(book){
    let filteredMyBooks = this.state.myBooks.filter(item => {
      return book.id !== item.id
    })
    console.log(filteredMyBooks)
    this.setState({myBooks: filteredMyBooks})
  }



  addOrRemoveBook(book){
    if(this.state.myBooks.includes(book)){ //if book is in my books
      this.removeBook(book) //call remove book
    } else {
      this.addBook(book) //add book to collection
    }
  }

  createBook(e, book){
    e.preventDefault()
    let randId = Math.floor(Math.random() * 999999) + 1
    console.log('inside create book')
    console.log(book.title)
    let createMe = {title: book.title, author: book.author, img: book.img, id: randId }
    this.setState({books: [...this.state.books, createMe]})
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addOrRemoveBook={this.addOrRemoveBook} createBook={this.createBook}/>
        <Bookshelf myBooks={this.state.myBooks} addOrRemoveBook={this.addOrRemoveBook}/>
      </div>
    );
  }
}

export default App;
