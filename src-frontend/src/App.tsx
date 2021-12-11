import React from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import Navigation from './navigation/navigation';

function App() {
  const myJSONObject = {
    "hello":"nihoa",
    "hello2":"yoyo",
    "hello3":"heyhey"
  };

  return (
    <div className="App">
      <Navigation />
      <h1 className="title">DORA API</h1>
      <form>
        <label className="pathLabel">https://url/api/ </label>
        <select >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        <input className="pathInput" type="text" id="path"></input>
        <input className="submitBtn" type="submit"></input>
      </form>
      <div className="jsonViewContainer">
        <ReactJson src={myJSONObject}></ReactJson>  
      </div>
    </div>
  );
}

export default App;
