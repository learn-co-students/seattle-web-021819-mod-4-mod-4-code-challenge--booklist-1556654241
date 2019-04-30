import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook}/>
        <ul>{this.props.books.map(book => {
          return <Book book={book} key={book.id} addOrRemoveBook={this.props.addOrRemoveBook}/>
        })}</ul>
      </div>
    );
  }
}

export default BookList;
