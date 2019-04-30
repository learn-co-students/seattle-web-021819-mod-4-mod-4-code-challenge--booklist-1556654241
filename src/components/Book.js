import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.clickEvent(props.book)}>
      <h2>{props.title}</h2>
      <img src={props.img} alt='img'></img>
    </div>
  );
};

export default Book;
