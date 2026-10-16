import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

function App() {
  return (
    <div>
      <h1>Task List</h1>
      <TodoList></TodoList>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;
