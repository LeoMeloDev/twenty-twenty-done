import React from 'react'
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask';

function App(props) {
  const [tasks, setTasks] = React.useState([])

  const handleAddNewTask = (value) => {
    const newTasks = [...tasks]
  }

  return (
    <div className="App">
      <Header 
        header = "Twenty Twenty Done"
      />
      <AddTask 
        placeholder = 'add task'
        addTask = { handleAddNewTask }
      />  
      
    </div>
  );
}

export default App;
