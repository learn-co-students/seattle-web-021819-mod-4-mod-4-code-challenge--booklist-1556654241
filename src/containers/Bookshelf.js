import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.myBooks.map(book => {
        return <Book book={book} key={book.id} addOrRemoveBook={props.addOrRemoveBook}/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
