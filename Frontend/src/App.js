import React from 'react';

//Styles
import '../src/styles/Global.css';
import './styles/Background.scss';

//Components
import FileInput from './components/FileInput';
import PasswordParameters from './components/PasswordParameters';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      passLength: 8
    };
  }

  // updateLength(length) {
  //   this.setState({
  //     passLength: length
  //   });
  //   console.log("hit");
  // }

  render(){
    return(
      <div className="App">
        <h1>PictoPass</h1>
          <FileInput passLength={this.state.passLength} />
          <PasswordParameters /*updateLength={this.updateLength}*/ />
      </div>
    );
  }
}

export default App;
