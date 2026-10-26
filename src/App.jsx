import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import { useState } from 'react';

function App() {
  const todos = [
    {id: 454, title: "Call Mom"}, 
    {id: 455, title: "Paint Living Room"}, 
    {id: 456, title: "Grocery Shopping"}
  ];

  const [todoList, setTodoList] = useState(todos); 

  return (
    <div>
      <h1>Task List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
