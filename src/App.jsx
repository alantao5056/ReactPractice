import './App.css'
import Title from './Title.jsx'
import TodoCard from './TodoCard.jsx'
import InputBox from './InputBox.jsx'

export default function App() {
  return (
    <div id="main">
      <Title />
      <TodoCard text="hi"/>
      <InputBox />
    </div>
  )
}
