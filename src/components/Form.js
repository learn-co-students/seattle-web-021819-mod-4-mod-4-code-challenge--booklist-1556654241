import React from "react";

class Form extends React.Component {

  handleClick = (ev) => {
    ev.preventDefault()
    let newBook = {}
    newBook["title"] = ev.target[0].value
    newBook["author"] = ev.target[1].value
    newBook["img"] = ev.target[2].value
    this.props.buyBook(newBook)
  }


  render() {
    return (
      <form onSubmit={(ev) => this.handleClick(ev)}>
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="author" placeholder="author"/>
        <input type="text" name="img" placeholder="img"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Form;
