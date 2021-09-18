import React from 'react';
import axios from 'axios';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("image_input").files[0]);
    
    reader.addEventListener("load", () => {
      let data = reader.result;
      axios.post("http://localhost:5000/newImage", {
        file: data
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      });
    });
  }

  render(){
      return(
        <div>
        <form onSubmit={this.handleSubmit}>
            {/*<label id = "LableFileInput">
              Input File 
              {/* Choose File Button
                <input 
                  type = "file" 
                  className = "ButtonInput"
                  onChange = {this.handleChange}
                />
            */}
            <label>
                Input file
                <input id="image_input" type = "file" onChange = {this.handleChange}/>
            </label>
            {/* Submit Button */}
          <input 
            className = "ButtonInput"
            type = "submit" 
            value = "Submit"
          />
        </form>
        <img id = "InputedPicture" src={this.state.file}></img>
      </div>
    )
  }
}