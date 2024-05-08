import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from "react";

let baseUrl = 'http://localhost:3000/info'

function App() {
  const [post, setPost ] = useState(null)

  useEffect(() => {
    axios.get(baseUrl)
        .then((response) => {
            setPost(response.data); // Assuming you want to set the response data
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            // Handle error here (e.g., set an error state)
        });
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This Project is Done by {post?.Name} age {post?.Age}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
