import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import { useState } from 'react';

const todos = [
    {id: 454, title: "Call Mom"}, 
    {id: 455, title: "Paint Living Room"}, 
    {id: 456, title: "Grocery Shopping"}
  ];

function App() {
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
