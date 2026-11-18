import './App.css';
import TodoForm from './features/TodoForm.jsx';
import TodoList from './features/TodoList/TodoList.jsx';
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
  function updateTodo(editedTodo){
    const updateTodos = todoList.map(todo => todo.id == editedTodo.id ? editedTodo : todo);
    setTodoList(updateTodos);
  }

  return (
    <div>
      <h1>Task List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo = {completeTodo} onUpdateTodo={updateTodo} />
    </div>
  );
}

export default App;
