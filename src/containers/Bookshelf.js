import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const books = props.bookshelf.map(book => {
    return <Book key={book.id} book={book} handleClick={props.removeFromShelf}/>
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
