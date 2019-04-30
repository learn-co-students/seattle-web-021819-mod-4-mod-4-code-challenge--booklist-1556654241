import React from "react";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author: '',
      img: ''
    }
  }

  handleChange = (event) => {
    let name = event.target.name

    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewBook(this.state)
  }

  render() {
    return (
      <h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
          <input type="text" name="author" placeholder="Author" onChange={this.handleChange}/>
          <input type="text" name="img" placeholder="Image" onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </h1>
    )
  }
}

export default Form;
