import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  constructor() {
    super()
    this.state = {
      formTitle: "",
      formAuthor: "",
      formUrl: ""
    }
  }

  updateForm = (key, value) => {
    this.setState({[key]: value})
  }

  resetForm = () => {
    this.setState({
      formTitle: "",
      formAuthor: "",
      formUrl: ""
    })
  }

  displayBooks = () => {
    return this.props.allBooks.map((book, index) => {
      return (
        <li key={index}>
          <Book book={book} handleClick={this.props.handleClick}/>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>

        <Form createBook={this.props.createBook} updateForm={this.updateForm} resetForm={this.resetForm} formTitle={this.state.formTitle} formAuthor={this.state.formAuthor} formUrl={this.state.formUrl}/>

        <ul>
          {this.displayBooks()}
        </ul>

      </div>
    );
  }
}

export default BookList;
