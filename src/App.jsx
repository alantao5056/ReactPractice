import './App.css'
import Title from './Title.jsx'
import TodoCard from './TodoCard.jsx'
import Input from './Input.jsx'

export default function App() {
  return (
    <div id="main">
      <Title />
      <TodoCard text="hi"/>
      <Input />
    </div>
  )
}
