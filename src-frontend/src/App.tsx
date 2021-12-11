import React from 'react';
import './App.css';
import Navigation from './navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1 className="title">DORA API</h1>
      <form>
        <label className="pathLabel">https://url/api/ </label>
        <input className="pathInput" type="text" id="path"></input>
        <input className="submitBtn" type="submit"></input>
      </form>
    </div>
  );
}

export default App;
