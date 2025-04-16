// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteUser} = props
  const {id, title} = eachTodo
  const userDeleteBtn = () => deleteUser(id)
  return (
    <li className="each-todo-container">
      <p>{title}</p>
      <button type="button" onClick={userDeleteBtn}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
