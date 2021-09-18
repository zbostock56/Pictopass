import React from 'react';
import axios from 'axios';
//import ImagePreview from './ImagePreview'

//Handle file submittions to be pushed to the backend API

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
<<<<<<< Updated upstream
    this.setState({
      value: event.target.value,
      file: URL.createObjectURL(event.target.files[0])
    });
    console.log(this.state.file)
    
  }

  handleSubmit(event) {
    //axios.post('/test', {
      
    // }).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });
=======
    this.setState({value: event.target.value});
    axios.post('http://localhost:5000/hello', {
      name: document
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    /*event.preventDefault();
    axios.post('/test', {
      canvas: document.createElement("canvas")
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });*/
>>>>>>> Stashed changes
  }

  render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
              <label>
                  Input file
                  <input type = "file" onChange = {this.handleChange}/>
              </label>
            <input type = "submit" value = "Submit"/>
          </form>
          <img src={this.state.file}></img>
        </div>
      )
  }
}