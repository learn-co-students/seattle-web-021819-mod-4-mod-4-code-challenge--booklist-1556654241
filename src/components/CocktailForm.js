import React from "react";

class CocktailForm extends React.Component {

  constructor(props){
    super(props)
      this.state = {
        name: "",
        description: "",
        instruction: "",
        source: ""
      }
  }

handleChange = (ev) => {
  this.setState({
    [ev.target.name]: ev.target.value
  })
}

handleSubmit = (ev) => {
ev.preventDefault()
this.props.createNewCocktail(this.state)
this.setState({
  name: "",
  description: "",
  instruction: "",
  source: ""
})
}


  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
          required
          />
        <input
          type="text"
          name="intruction"
          placeholder="instruction"
          value={this.state.instruction}
          onChange={this.handleChange}
          required
          />
        <input
          type="text"
          name="source"
          placeholder="source"
          value={this.state.source}
          onChange={this.handleChange}
          required
          />
        <input value="submit" type="submit"/>
      </form>
    )
  }
}

export default CocktailForm;
