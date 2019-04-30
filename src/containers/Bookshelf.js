import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
        <ul>{props.bookShelf.map((book, idx)=>{
          return <Book handleBookAdd={props.handleBookRemove} book={book} key={idx}/>
        })}</ul>
    </div>
  );
};

export default Bookshelf;
