import React from "react";

class Form extends React.Component {
  render() {
    return <form onSubmit={(event) => {
      event.preventDefault();
      this.props.handleSubmit(event.target.value)
    }}>
      <input type="text" placeholder="title" value="title"/>
      <input type="text" placeholder="author" value="author"/>
      <input type="text" placeholder="img" value="img"/>
      <input type="submit" value="submit" />
    </form>
  }
}

export default Form;
