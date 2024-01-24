
import './App.css';
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      const ed = todos.find((i) => i.id === editId)
      const updatedtodo = todos.map((t) => t.id === ed.id ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo })
      setTodos(updatedtodo)
      setEditId(0)
      setTodo("")
      return
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("")
    }

  }

  const handleDelete = (id) => {
    const del = todos.filter((t) => t.id !== id)
    setTodos([...del])

  }

  const handleEdit = (id) => {
    const ed = todos.find((i) => i.id === id)
    setTodo(ed.todo)
    setEditId(id)

  }
  return (
    <div className="App">

      <div className='container'>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit} >
          <input className='I' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button className='b' type='submit'>{
            editId ? "Edit" : "Add"
          }
          </button>
        </form>

        <ul>
          {
            todos.map((t) => (
              <li className='l'>
                <span className='text' key={t.id}>{t.todo}</span>
                <button className='bE' onClick={() => handleEdit(t.id)}>Edit</button>
                <button className='bD' onClick={() => handleDelete(t.id)}>Delete</button>
              </li>

            )


            )
          }


        </ul>

      </div>




    </div>
  );
}

export default App;
