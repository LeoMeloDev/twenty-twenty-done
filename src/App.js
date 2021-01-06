import React from 'react'
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask';
import Task from './components/Task'

function App(props) {
  const [tasks, setTasks] = React.useState([])

  const handleAddNewTask = (value) => {
    const newTasks = [...tasks, {item: value}]
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <Header 
        header = "Twenty Twenty Done"
      />
      <AddTask 
        placeholder = 'what are your tasks due today?...'
        addTask = { handleAddNewTask }
      />  
      <Task 
        tasks={tasks}
      />
    </div>
  );
}

export default App;
