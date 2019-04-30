import React from "react";

class Form extends React.Component {

constructor(){
  super()
  this.handleChange = this.handleChange.bind(this)
  this.state = {
    title: undefined,
    author: undefined,
    img: undefined
  }
}

handleChange(e){
  e.preventDefault()
  console.log('inside handleChange')

  this.setState({[e.target.name]: e.target.value})
}


  render() {
    return <h1>
            <form>
            <input type="text" name="title" value={this.state.title} placeholder="title"  onChange={this.handleChange} />
            <input type="text" name="author" value={this.state.author} placeholder="author" onChange={this.handleChange}/>
            <input type="text" name="img" value={this.state.img} placeholder="img" onChange={this.handleChange}/>
            <input type="submit" value="Submit" onClick={(event) => this.props.createBook(event, this.state)}/>
            </form>
        </h1>
  }
}

export default Form;
