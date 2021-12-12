import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import Navigation from './navigation/navigation';
import axios from 'axios';

function App() {

  //Hooks
  const [request, setRequest] = useState("GET");
  const [apiPath, setApiPath] = useState("");
  const [json, setJSON] = useState({});

  //Handler
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){  
    event.preventDefault();
    let response;
    switch (request) {
      case "GET":
        response = await axios.get("http://localhost:8080/" + apiPath);
        setJSON(response.data);
        break;
      case "POST":
        response = await axios.post("http://localhost:8080/" + apiPath, json);
        setJSON(response.data);
        break;
      case "PATCH":
        response = await axios.patch("http://localhost:8080/" + apiPath, json);
        setJSON(response.data);
        break;
      case "DELETE":
        response = await axios.delete("http://localhost:8080/" + apiPath);
        setJSON(response.data);
        break;
    }
  }

  const handleRequestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRequest(event.target.value);
  }

  const handlePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiPath(event.target.value);
  }

  const onEdit = (event: any) => {
    setJSON(event.updated_src);
  }
  
  const onAdd = (event: any) => {
    setJSON(event.updated_src);
  }

  const onDelete = (event: any) => {
    setJSON(event.updated_src);
  }

  //Root styling
  const rootStyle = {
    backgroundColor : 'lightblue',
    height : '100vh'
  }

  //HTML
  return (
    <div className="App" style={rootStyle}>
      <Navigation 
        setJSON={setJSON}
      />
      <h1 className="title">DORA API</h1>
      <h2>The RESTful Doraemon Gadget API</h2>
      <h4>All the Doraemon Gadget data you will need is here.<br />
      You can interact with database via CRUD fucntionality
      </h4>
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
        <div className="jsonViewContainerChild">
          <ReactJson src={json} onEdit={onEdit} onAdd={onAdd} onDelete={onDelete}></ReactJson>
        </div>
      </div>
    </div>
  );
}

export default App;
