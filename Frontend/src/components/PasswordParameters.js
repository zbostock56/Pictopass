import React from 'react';

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
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        console.log(this.state.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        //let reader = new FileReader();
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