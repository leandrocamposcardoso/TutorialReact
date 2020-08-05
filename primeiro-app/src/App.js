import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList'
import SendTodo from './components/SendTodo'
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(['task 1', 'task 2', 'task 3']);
  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newArr = [...tasks, e.target[0].value ]
    setTasks(newArr);

  }

  return (
    <div className="App">
      <Header numTodos={tasks.length} />
      <TodoList task={tasks} onDelete={handleDelete} />
      <SendTodo handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
