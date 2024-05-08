
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import TaskForm from './component/FormController/Form';
import TodoListContainer from './component/todoListController/todoListContainer';

let baseUrl = 'http://localhost:3000/info'
const dummyList = [
  { title: 'Frontend', description: 'Develop a UI using React', status: 'To Do' },
  { title: 'Backend', description: 'Build server-side logic using Node.js', status: 'In Progress' },
  { title: 'Database', description: 'Design and implement database schema', status: 'In Progress' },
  { title: 'Deployment', description: 'Deploy application to production server', status: 'Done' }
];

function App() {
  // const [post, setPost ] = useState(null)

  const handleSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Handle form data submission here (e.g., send it to a server)
  };

  //   useEffect(() => {
  //     axios.get(baseUrl)
  //         .then((response) => {
  //             setPost(response.data); // Assuming you want to set the response data
  //         })
  //         .catch((error) => {
  //             console.error('Error fetching data:', error);
  //             // Handle error here (e.g., set an error state)
  //         });
  // }, []);

  return (
    <div className="App">
      <Container className="px-0">
        <h1>Task Management System</h1>
        <TaskForm onSubmit={handleSubmit} />
        <TodoListContainer list={dummyList}/>
      </Container>
    </div>
  );
}

export default App;
