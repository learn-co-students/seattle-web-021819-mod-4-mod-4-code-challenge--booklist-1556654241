import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      img: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleImgChange = this.handleImgChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    })
  }

  handleImgChange(event) {
    this.setState({
      img: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type='text' onChange={this.handleTitleChange}
        value={this.state.title} placeholder='title' />

        <input
          type='text' onChange={this.handleAuthorChange}
          value={this.state.author} placeholder='author' />

        <input
          type='text' onChange={this.handleImgChange}
          value={this.state.img} placeholder='img' />

        <input type='submit' />
      </form>
    )
  }
}

export default Form;
