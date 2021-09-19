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
      file : null,
      password: ""
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
        this.setState({
          value: this.state.value,
          file: this.state.file,
          password: res.data
        });
      }).catch(err => {
        console.log(err);
      });
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Input file
                {/*Choose File Button*/}
                <input 
                  className = "ButtonInput"
                  id = "image_input" 
                  type = "file" 
                  onChange = {this.handleChange}
                />  
            </label>
            
            {/* Submit Button */}
          <input 
            className = "ButtonInput"
            type = "submit" 
            value = "Submit"
          />
        </form>
        <div className="picture_frame">
          <img id="InputedPicture" src={this.state.file}></img>
        </div>
        <p className="output">{this.state.password}</p>
      </div>
    )
  }
}