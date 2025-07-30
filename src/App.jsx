import './App.css'
import './TodoList.jsx'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'
import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState(0)
  
  return (
   <div>
    <h1>My Todos</h1>
    <TodoForm />
      <p>
        <newTodo>{newTodo}</newTodo>
        <setNewTodo>{setNewTodo}</setNewTodo>
      </p>
    <TodoList />
   </div> 
  )
}

export default App
