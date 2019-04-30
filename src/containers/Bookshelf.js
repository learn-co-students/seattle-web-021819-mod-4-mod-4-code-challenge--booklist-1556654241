import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{props.bookshelf.map((book, index) => {
        return (
          <Book
            key={index}
            book={book}
            handleBookClick={props.handleBookClick} />
      )})}
      </ul>
    </div>
  );
};

export default Bookshelf;
