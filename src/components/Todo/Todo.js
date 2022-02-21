import React from 'react'
import Button from '../Button/Button'
import './style.css'

function Todo({todo, onClick, key, isDone, removeTodo}) {
    console.log(isDone)
  return (
    <div className="todo">
        <Button title={'V'} onClick={onClick} id={key}/>
            <p className={
            isDone ? 'done' : ''
            }>{todo}</p>
        <Button title={'x'} onClick={removeTodo}/>
    </div>
  )
}

export default Todo