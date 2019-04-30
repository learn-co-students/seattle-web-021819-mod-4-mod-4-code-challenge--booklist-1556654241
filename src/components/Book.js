import React from "react";

const Book = props => {
  return (
    // Super hacky way of sending in different onClick functions
    // depending on if it comes from booklist or bookshelf
    <div onClick={() => props.handleClick(props.book)}>
      <h3>{props.book.title}</h3>
      <img src={props.book.img} alt={props.book.title} />
    </div>
  );
};

export default Book;
