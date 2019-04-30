import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          title={this.props.title}
          author={this.props.author}
          img={this.props.img}
          createBookTitle={this.props.createBookTitle}
          createBookAuthor={this.props.createBookAuthor}
          createBookImg={this.props.createBookImg}
           />
        <ul>{
            this.props.books.map((book)=> {
              return <Book
                      book={book}
                      addBook={this.props.addBook}
                      />
            })
          }</ul>
      </div>
    );
  }
}

export default BookList;
