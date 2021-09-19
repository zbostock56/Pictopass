import React from 'react';
import axios from 'axios';

//Styles
import '../styles/Global.css'

/*
Handles inputs from user on different parameters for the password generation
*/
export default class PasswordParameters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/updateLength", {
            length: this.state.value
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <h3 className = "h3Style">Amount of Password Characters</h3>
                        <br/>
                        <input 
                        type = "number"
                        name = "passwordLength"
                        onChange = {this.handleChange}
                        id = "CharactersPassword"
                        />
                    </label>
                </form>
            </div>
        )
    }

}