import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {props.shelf.map(book =>
          <Book
            book={book}
            key={book.id}
            title={book.title}
            img={book.img}
            clickEvent={props.removeBook}
          />
        )}
      </ul>
    </div>
  );
};

export default Bookshelf;
