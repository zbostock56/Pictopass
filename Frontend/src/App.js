import React from 'react';

//Styles
import '../src/styles/Global.css';
import './styles/Background.scss';

//Components
import FileInput from './components/FileInput';



function App() {
  return (
    <div className="App">
      <h1>PictoPass</h1>
        <FileInput />
    </div>
  );
}

export default App;
