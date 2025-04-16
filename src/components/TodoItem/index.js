import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {isEditing: false, editText: '', isChecked: false}

  changeBtn = () => {
    const {isEditing, editText} = this.state
    const {eachTodo, updateTodo} = this.props
    if (isEditing) {
      updateTodo(eachTodo.id, editText)
    } else {
      this.setState({editText: eachTodo.title})
    }
    this.setState(prevState => ({isEditing: !prevState.isEditing}))
  }

  editTitle = event => {
    this.setState({editText: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {eachTodo, deleteUser} = this.props
    const {id, title} = eachTodo
    const {isEditing, editText, isChecked} = this.state
    const btnText = isEditing ? 'Save' : 'Edit'
    const btnClass = isEditing
      ? 'edit-save-btn save-btn'
      : 'edit-save-btn edit-btn'
    const userDeleteBtn = () => deleteUser(id)
    const titleClass = isChecked ? 'title title-checked' : 'title'
    return (
      <li className="each-todo-container">
        {isEditing ? (
          <input
            onChange={this.editTitle}
            className="edit-title"
            type="text"
            value={editText}
          />
        ) : (
          <div className="check-cont">
            <input onChange={this.toggleCheckbox} type="checkbox" />
            <p className={titleClass}>{title}</p>
          </div>
        )}

        <button onClick={this.changeBtn} type="button" className={btnClass}>
          {btnText}
        </button>
        <button className="delete-button" type="button" onClick={userDeleteBtn}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
