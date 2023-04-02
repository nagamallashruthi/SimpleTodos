// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemList, deleteTodo} = props
  const {title, id} = itemList
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
