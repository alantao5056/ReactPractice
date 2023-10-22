import './App.css'
import Title from './Title.jsx'
import TodoCard from './TodoCard.jsx'
import Input from './Input.jsx'
import { useState } from 'react'

export default function App() {
  const [curId, setCurId] = useState(0)
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(prev => {
      setCurId(prev => {
        return prev+1
      })
      return [...prev, {id: curId, text: text}]
    })
  }

  const deleteTodo = (id) => {
    setTodos(prev => {
      return prev.filter((todo) => {
        return todo.id != id
      })
    })
  }

  return (
    <div id="main">
      <Title />
      {todos &&
        todos.map((item) => {
          return (<TodoCard item={item} key={item.id} deleteTodo={deleteTodo}/>)
        })
      }
      <Input addTodo={addTodo}/>
    </div>
  )
}
