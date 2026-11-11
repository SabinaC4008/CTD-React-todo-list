import { useRef, useState } from 'react'; 

function TodoForm({onAddTodo}) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState("")
  const inputRef = useRef(); 

  const handleAddTodo = (event) => {
    event.preventDefault(); 
   

    if(workingTodoTitle){
      onAddTodo(workingTodoTitle); 
      setWorkingTodoTitle("");
      inputRef.current.focus(); 
    }
  }

  const handleInputValueChange = (event) => {
    event.preventDefault(); 
    setWorkingTodoTitle(event.target.value.trim());
  }

  return(
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input 
        ref={inputRef}
        type="text" 
        id="todoTitle"
        name="todoTitle"
        placeholder={'Todo Text'}
        value = {workingTodoTitle}
        onChange={handleInputValueChange}
        required
      />
      <button type="submit" disabled={!workingTodoTitle.trim()}>Add Todo</button>
    </form>
  );
}

export default TodoForm;