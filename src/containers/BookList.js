import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const { books, handleBookClick, handleFormSubmit } = this.props

    return (
      <div className="book-list">
        <h1>Book List</h1>

        <Form
          handleFormSubmit={handleFormSubmit}/>

        <ul>{books.map((book, index) => {
          return (
            <Book
              key={index}
              book={book}
              handleBookClick={handleBookClick} />
        )})}
        </ul>
      </div>
    );
  }
}

export default BookList;
