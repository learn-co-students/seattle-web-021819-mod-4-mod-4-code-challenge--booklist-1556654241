import React from "react";

const Book = props => {
  return (
    <div onClick={()=>{
        if(props.addBook) props.addBook(props.book)
        else if(props.removeBook) props.removeBook(props.book)
      }}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}></img>
    </div>
  );
};

export default Book;
