import React from "react";

class Form extends React.Component {

  handleChange = (ev) => {
    // console.log("typing detected by handleChange...")
    this.props.updateForm(ev.target.name, ev.target.value)
  }

  handleClick = (ev) => {
    ev.preventDefault();
    let obj = {
      title: this.props.formTitle,
      author: this.props.formAuthor,
      img: this.props.formUrl
    }
    this.props.createBook(obj)
    this.props.resetForm()
  }

  render() {
    return (
      <form>
        <input type="text" name="formTitle" value={this.props.formTitle} onChange={this.handleChange} placeholder="title" />
        <input type="text" name="formAuthor" value={this.props.formAuthor} onChange={this.handleChange} placeholder="author" />
        <input type="text" name="formUrl" value={this.props.formUrl} onChange={this.handleChange} placeholder="cover url" />
        <input type="submit" value="Add book!" onClick={this.handleClick}/>
      </form>
    );
  }
}

export default Form;
