import React, {useState, useEffect} from 'react'
import Todo from '../Todo/Todo'

function TodoContainer({todos, onClick, removeTodo}) {
    console.log('total container todos: ',todos);
    return (
    <div>
        {
            todos.map((item, idx) => {
                return <Todo todo={item.title} key={idx} onClick={() => onClick(idx)} isDone={item.isDone} removeTodo={() => removeTodo(idx)}/>
            })
        }
    </div>
  )
}

export default TodoContainer