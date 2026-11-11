import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]); 
  function addTodo(todoTitle) {
    const newTodo = {
      id: Date.now(), 
      title: todoTitle, 
      isCompleted: false
    };
    setTodoList(previous => [newTodo, ...previous]);
  }
  function completeTodo(id){
    const updatedtodoList = todoList.map(todo => 
      todo.id == id ? {...todo, isCompleted: true} : todo
    );
    setTodoList(updatedtodoList);
  }

  return (
    <div>
      <h1>Task List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo = {completeTodo} />
    </div>
  );
}

export default App;
