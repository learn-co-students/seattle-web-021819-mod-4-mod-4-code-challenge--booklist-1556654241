import React, {Component} from "react";

class Book extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.book)
  }

  render() {
    return (
      <div id="book" onClick={this.handleClick}>
        <h2>{this.props.book.title}</h2>

        <img class="book-cover" src={this.props.book.img} alt="book cover"/>

      </div>
    );
  }

};

export default Book;
