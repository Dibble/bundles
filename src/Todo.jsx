import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    setTodos([...todos, { id: new Date().getTime(), text }])
    setText('')
  }

  const removeTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id} onClick={() => removeTodo(todo.id)}>{todo.text}</li>)}
      </ul>
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default Todo
