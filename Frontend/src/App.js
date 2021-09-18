import React from 'react';
import './App.css';
import FileInput from './components/FileInput';
//import fileInput from './components/fileInput';


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
