import React from 'react';
import './Global.css';
import FileInput from './components/FileInput';



function App() {
  return (
    <div className="App">
      <h1>PictoPass</h1>
      <div className = "inputPictureFile">
        <FileInput />
      </div>
    </div>
  );
}

export default App;
