import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {props.books.map((book, index) => {
        return <Book
                book={book}
                key={index}
                handleClick={props.removeBook}
               />
         })}
      </ul>
    </div>
  );
};

export default Bookshelf;
