import './App.css'

function App() {
  const todoList = [
    {id: 454, title: "Call Mom"}, 
    {id: 455, title: "Paint Living Room"}, 
    {id: 456, title: "Grocery Shopping"}
  ]

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {todoList.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
}

export default App
