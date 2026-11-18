import { useRef, useState } from 'react'; 
import TextInputWithLabel from '../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../utils/todoValidation';

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
    setWorkingTodoTitle(event.target.value);
  }

  return(
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel labelText={"Todo"} ref={inputRef} value={workingTodoTitle} onChange={handleInputValueChange} elementId={"todoTitle"}/>
      <button type="submit" disabled={!isValidTodoTitle(workingTodoTitle)}>Add Todo</button>
    </form>
  );
}

export default TodoForm;