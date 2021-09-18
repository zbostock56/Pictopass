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