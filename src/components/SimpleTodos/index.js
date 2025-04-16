// Write your code here
import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, userTodo: ''}

  deleteUser = id => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  readUserTodo = event => {
    this.setState({userTodo: event.target.value})
  }

  addNewTodo = () => {
    const {todosList, userTodo} = this.state
    const inputList = userTodo.split(' ')
    const lastPart = inputList.slice(-1)
    const parsedNum = Number(lastPart)

    if (typeof parsedNum === 'number') {
      for (let i = 0; i < parsedNum; i += 1) {
        const newTodo = {
          id: todosList.length + 1,
          title: userTodo.slice(0, userTodo.length - 2),
        }

        this.setState(prevState => ({
          todosList: [...prevState.todosList, newTodo],
          userTodo: '',
        }))
      }
    }
    const newTodo = {
      id: todosList.length + 1,
      title: userTodo,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      userTodo: '',
    }))
  }

  updateTodo = (id, updatedTitle) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, title: updatedTitle} : todo,
      ),
    }))
  }

  render() {
    const {todosList, userTodo} = this.state

    return (
      <div className="main-container">
        <div className="todos-container">
          <h1 className="main-header">Simple Todos</h1>
          <div className="input-container">
            <input
              onChange={this.readUserTodo}
              value={userTodo}
              className="input"
              type="text"
              placeholder="Add your Todo"
            />
            <button onClick={this.addNewTodo} type="button" className="add-btn">
              Add
            </button>
          </div>
          <ul>
            {todosList.map(eachTodo => (
              <TodoItem
                eachTodo={eachTodo}
                key={eachTodo.id}
                deleteUser={this.deleteUser}
                updateTodo={this.updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
