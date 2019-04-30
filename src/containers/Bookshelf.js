import React, {Component} from "react";
import Book from "../components/Book";

class Bookshelf extends Component {

  displayBooks = () => {
    return this.props.bookShelf.map((book, index) => {
      return (
        <li key={index}>
          <Book book={book} handleClick={this.props.handleClick}/>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }

};

export default Bookshelf;
