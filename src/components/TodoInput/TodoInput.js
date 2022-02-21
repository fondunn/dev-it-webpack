import React from 'react'

function TodoInput({onChange}) {

  return (
      <input placeholder="add todo" onChange={onChange}/>
  )
}

export default TodoInput