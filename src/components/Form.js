import React from "react";

class Form extends React.Component {
  render() {
    return <h1>
              <form onSubmit={this.props.handleSubmit}>
           <input type="text" name="owner" id="owner" value={this.props.title} placeholder="title" onChange={this.props.createBookTitle}/>
           <input type="text" name="description" id="description" value={this.props.author} placeholder="author" onChange={this.props.createBookAuthor}/>
           <input type="text" name="description" id="description" value={this.props.img} placeholder="img" onChange={this.props.createBookImg}/>
           <input type="submit" value="Submit" />
         </form>
         {console.log(this.props)}
    </h1>;
  }
}

export default Form;
