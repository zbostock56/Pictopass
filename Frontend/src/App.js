import React from 'react';

//Styles
import '../src/styles/Global.css';
import './styles/Background.scss';

//Components
import FileInput from './components/FileInput';
import PasswordParameters from './components/PasswordParameters';

function App() {
  return (
    <div className="App">
      <h1>PictoPass</h1>
        <FileInput />
        <br/>
        <PasswordParameters/>
    </div>
  );
}

export default App;
