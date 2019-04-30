import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
          props.myBooks.map((book, index)=> {
            return <Book
                    book={book}
                    key={index}
                    removeBook={props.removeBook}
                    />
          })
        }</ul>
    </div>
  );
};

export default Bookshelf;
