function TodoList () {
  const todoList = [
    {id: 454, title: "Call Mom"}, 
    {id: 455, title: "Paint Living Room"}, 
    {id: 456, title: "Grocery Shopping"}
  ];

  return (
    <>
      <ul>
        {todoList.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  );
}

export default TodoList;