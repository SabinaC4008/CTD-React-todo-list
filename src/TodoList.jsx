function TodoList (props) {
  

  return (
    <>
      <ul>
        {props.todoList.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  );
}

export default TodoList;