import React, {useState, useEffect} from 'react'
import AddTodoContainer from './components/AddTodoContainer/AddTodoContainer'
import TodoContainer from './components/TodoContainer/TodoContainer'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    console.log(value)
    setTodos(prev => 
      [...prev , {
        id: todos.length,
        title: value,
        isDone: false
      }]
    )
  }

  const returnSelected = (id) => {
    setTodos(prev => 
      [...prev.map(el => el.id === id ? ({
        ...el,
        isDone: true
      }): ({
        ...el
      }))]
    )
  }

  const removeTodo = (id) => {
    setTodos(prev =>
      [...prev.filter(el => el.id !== id)]
      )
  }
  
  useEffect(() => {
  }, [todos])
  return (
    <div>
      <AddTodoContainer addTodo={addTodo}/>
      <TodoContainer todos={todos} onClick={returnSelected} removeTodo={removeTodo}/>
    </div>
  )
}

export default App