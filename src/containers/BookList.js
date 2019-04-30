import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewBook={this.props.handleNewBook} />
        <ul>
          {this.props.books.map((book, index) => {
            return <Book
                    book={book}
                    key={index}
                    handleClick={this.props.addBook}
                   />
          })}
        </ul>
      </div>
    );
  }

}

export default BookList;
