import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const {displayBooks, addBook, buyBook} = this.props
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form buyBook={buyBook}/>
        <ul>
          {
            displayBooks.map((book, index) => {
              return (
                <Book
                  book={book}
                  key={index}
                  addOrRemoveBook={addBook}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookList;
