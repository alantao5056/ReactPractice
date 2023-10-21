import { Card } from 'react-bootstrap';
import { useState } from 'react';
import './InputBox.css'



export default function InputBox() {
  let val = ''
  const [items, setItems] = useState([]);
  const submit = (e) => {
    e.preventDefault()
    let input = document.getElementById('todo').value

    const newCard = (<Card text={input}/>)
    setItems([
      ...items,
      newCard
    ])
  }
  return (
    <div className="input-box">
      <>
        {items.map(item => (
          item
        ))}
      </>
      <form>
        <input type="text" id="todo" placeholder="What do you need to do?" />
        <button type="submit" onClick={(e)=>submit(e)}>Submit</button>
      </form>
    </div>
  );
}