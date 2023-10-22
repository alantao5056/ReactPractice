import TodoCard from './TodoCard';
import { useState } from 'react';
import './Input.css'



export default function Input({ addTodo }) {
  const submit = (e) => {
    e.preventDefault()
    let form = document.getElementById('todo')
    let input = form.value
    form.value = ''

    // console.log(input)
    addTodo(input)
  }
  return (
    <div className="input">
      <form>
        <input type="text" id="todo" placeholder="What do you need to do?" />
        <button type="submit" onClick={(e)=>submit(e)}>Submit</button>
      </form>
    </div>
  );
}