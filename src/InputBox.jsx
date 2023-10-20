import './InputBox.css'



export default function InputBox() {
  const submit = (e) => {
    alert(e.target.value)
  }
  return (
    <div className="input-box">
      <form>
        <input type="text" placeholder="What do you need to do?" />
        <button type="submit" onClick={(e) => submit(e)}>Submit</button>
      </form>
    </div>
  );
}