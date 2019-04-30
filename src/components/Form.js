import React from "react";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      img: ''
    }
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.handleNewBook(this.state);
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="img"
          value={this.state.img}
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default Form;
