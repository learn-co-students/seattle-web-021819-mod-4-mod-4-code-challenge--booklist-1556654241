import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor(){
    super()
    this.state={
      bookList: [],
      bookShelf: [],
    }
    this.handleBookAdd = this.handleBookAdd.bind(this)
    this.handleBookRemove = this.handleBookRemove.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount(){
      fetch('http://localhost:3005/books')
        .then(res => res.json())
        .then(json => this.setState({
          bookList: json,
        }))
  }

  handleBookAdd(book){
    if(this.state.bookShelf.includes(book)){
      return
    } 
    this.setState({
      bookShelf: [...this.state.bookShelf, book]
    })
  }

  handleBookRemove(book){
    this.setState({
      bookShelf: this.state.bookShelf.filter(shelfBook => shelfBook !== book)
    })
  }

  handleSubmit(book){
    console.log(book)
    this.setState({
      bookList: [...this.state.bookList, book]
    })
  }

  onChangeHandler(event){
    if(event.target.name === 'name'){
      this.setState({
        name: event.target.value
      })
    } else {
      this.setState({
        img: event.target.value
      })
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList name={this.state.name} img={this.state.img} onChangeHandler={this.onChangeHandler} handleSubmit={this.handleSubmit} handleBookAdd={this.handleBookAdd} bookList={this.state.bookList}/>
        <Bookshelf handleBookRemove={this.handleBookRemove} bookShelf={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
