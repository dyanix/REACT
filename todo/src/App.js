
import './App.css';
import {useState} from "react"

function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
   if(todo !==''){
    setTodos([{id:`${todo}-${Date.now()}`, todo},...todos])
    setTodo("")
   }

  }

  const handleDelete =  (id) => {
    const del = todos.filter((t)=>t.id !== id)
    setTodos([...del])

  }
  return (
    <div className="App">
    
        <div className='container'>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit} >
        <input className='I' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button className='b' type='submit'>
            Add
          </button>
        </form>

        <ul>
          {
            todos.map((t)=>(
              <li className='l'>
              <span className='text' key={t.id}>{t.todo}</span>
              <button className='bE'>Edit</button>
              <button className='bD' onClick={()=>handleDelete(t.id)}>Delete</button>
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
