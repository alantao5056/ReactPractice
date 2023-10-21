import './TodoCard.css'

export default function TodoCard(props) {
  return (
    <div class="card">
      {props.text}
    </div>
  )
}