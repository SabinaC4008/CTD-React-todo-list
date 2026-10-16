function TodoForm() {
  return(
    <form>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle"/>
      <button disabled="True">Add Todo</button>
    </form>
  );
}

export default TodoForm;