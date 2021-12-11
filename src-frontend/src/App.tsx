import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import Navigation from './navigation/navigation';

function App() {
  const myJSONObject = {
    "hello":"nihoa",
    "hello2":"yoyo",
    "hello3":"heyhey"
  };

  //Hooks
  const [request, setRequest] = useState("GET");
  const [path, setPath] = useState("");

  //Handler
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){  
    event.preventDefault();
    switch (path) {
      case "GET":
        break;
      case "POST":
        break;
      case "PATCH":
        break;
      case "DELETE":
        break;
    }
  }

  const handleRequestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRequest(event.target.value);
  }

  const handlePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPath(event.target.value);
  }
  
  //HTML
  return (
    <div className="App">
      <Navigation />
      <h1 className="title">DORA API</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleRequestChange}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
        </select>
        <label className="pathLabel">https://url/api/ </label>
        <input className="pathInput" type="text" id="path" onChange={handlePathChange}></input>
        <input className="submitBtn" type="submit"></input>
      </form>
      <div className="jsonViewContainer">
        <ReactJson src={myJSONObject}></ReactJson>  
      </div>
    </div>
  );
}

export default App;
