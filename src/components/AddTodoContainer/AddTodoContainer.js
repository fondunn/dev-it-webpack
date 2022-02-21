import React, {useState} from 'react'
import TodoInput from '../TodoInput/TodoInput'
import Button from '../Button/Button'

function AddTodoContainer({addTodo}) {
  const [todoText, setTodoText] = useState('')
  console.log('input value: ',todoText);
  
  const setTodo = (e) => {
    console.log(e.target.value)
    // return e.target.value
    setTodoText(e.target.value)
  }

  return (
    <div>
        <TodoInput onChange={setTodo}/>
        <Button onClick={() => {addTodo(todoText)}} title={'+'} todoText={todoText}/>
    </div>
  )
}

export default AddTodoContainer