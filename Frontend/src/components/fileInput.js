import React from 'react';

//Styles
import '../styles/Global.css'

/*
Handle file submittions to be pushed to the backend API
*/

export default class FileInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      file : null
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      file: URL.createObjectURL(event.target.files[0])
    });
    console.log(this.state.file)
  }

  handleSubmit(event) {
    event.preventDefault();
    //let reader = new FileReader();
  }

  render(){
      return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Input file
                <input 
                type = "file" 
                onChange = {this.handleChange}
                />
            </label>
          <input 
          type = "submit" 
          value = "Submit"/>
        </form>
        <img id = "InputedPicture" src={this.state.file}></img>
      </div>
    )
  }
}