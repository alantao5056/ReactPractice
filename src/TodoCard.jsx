import './TodoCard.css'

export default function TodoCard({item, deleteTodo}) {
  return (
    <div className="card" key={item.id}>
      <span className="text">{item.text}</span>
      <button className="delete" onClick={() => {
        deleteTodo(item.id)
        // console.log(item.id)
      }}>delete</button>
    </div>
  )
}