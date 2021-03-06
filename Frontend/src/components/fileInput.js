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
      password: "",
      error: ""
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
        if (res.data.status == 200) {
          this.setState({
            value: this.state.value,
            file: this.state.file,
            password: res.data.password,
            error: ""
          });
        } else {
          this.setState({
            error: "Oops! Image failed to load, try again!"
          });
        }
      }).catch(err => {
        this.setState({
          error: "Oops! Image failed to load, try again!"
        });
      });
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                <h2 id = "InputFileHeader">Turning Pictures into Privacy</h2>
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
        <h3 id = "GeneratedPassword">Generated Password:</h3>
        <h5>{this.state.error}</h5>
        <p className="output">{this.state.password}</p>
      </div>
    )
  }
}