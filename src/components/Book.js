import React from "react";

const Book = props => {
  return (
    <div>
      <h2 onClick={() => props.addOrRemoveBook(props.book)}>{props.book.title} </h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
