import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onChangeHandler={this.onChangeHandler} handleSubmit={this.props.handleSubmit} />
        <ul>{this.props.bookList.map((book, idx)=>{
          return <Book handleBookAdd={this.props.handleBookAdd} book={book} key={idx}/>
        })}</ul>
      </div>
    );
  }
}

export default BookList;
