import React from 'react';
import axios from 'axios';

//Handle file submittions to be pushed to the backend API

export default class FileInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/test', {
      
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  render(){
      return(
          <form onSubmit={this.handleSubmit}>
              <label>
                  Input file
                  <input type = "file" onChange = {this.handleChange}/>
              </label>
              <input type = "submit" value = "Submit"/>
          </form>
      )
  }
}
