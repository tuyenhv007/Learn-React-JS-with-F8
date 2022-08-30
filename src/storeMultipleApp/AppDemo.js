import './App.css';
import { useStore, actions } from "./store"
import { useRef } from "react"


function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  const inputFocus = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputFocus.current.focus()
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  }

  return (
      <div style={{padding: 70}}>
        <input 
          ref={inputFocus}
          value={todoInput}
          placeholder="Enter todo..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} 
              <span onClick={() => handleDelete(index)}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default App;
