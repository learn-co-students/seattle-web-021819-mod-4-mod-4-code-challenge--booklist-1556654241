import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleBookClick(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt='' />
    </div>
  );
};

export default Book;
