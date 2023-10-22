import TodoCard from './TodoCard';
import { useState } from 'react';
import './Input.css'



export default function Input({ addTodo }) {
  const submit = (e) => {
    e.preventDefault()
    let form = document.getElementById('input-box')
    let input = form.value
    form.value = ''

    // console.log(input)
    addTodo(input)
  }
  return (
    <div id="input">
      <form>
        <input type="text" id="input-box" placeholder="What do you need to do?" />
        <button type="submit" id="submit-btn" onClick={(e)=>submit(e)}>Submit</button>
      </form>
    </div>
  );
}