import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const books = this.props.booklist.map(book => {
      return <Book key={book.id} book={book} handleClick={this.props.addBookToShelf}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
