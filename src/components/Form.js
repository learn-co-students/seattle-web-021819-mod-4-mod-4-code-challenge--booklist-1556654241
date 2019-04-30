import React from "react";

class Form extends React.Component {
  constructor(){
    super()
    this.state={
      title: '',
      img: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(event){
    event.preventDefault()
    if(event.target.name === 'name'){
      this.setState({
        title: event.target.value
      })
    } else {
      this.setState({
        img: event.target.value
      })
    }
  }
  render() {
    return <form>
            <label>
              Title:
              <input onChange={this.onChangeHandler} type="text" name="name" value={this.state.title}/>
            </label>
            <label>
              Image Url:
              <input onChange={this.onChangeHandler} type="text" name="img_url" value={this.state.img}/>
            </label>
            <button onClick={() => {this.props.handleSubmit(this.state)}} type="button">Submit</button>
          </form>
  ;
  }
}

export default Form;
