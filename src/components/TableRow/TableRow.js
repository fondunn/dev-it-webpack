import React from "react";
import './style.scss'

const TableRow = ({user}) => {
  return (
    <div className='tr'>
          <input type='checkbox'/>
          <p>{user.name}</p>
          <p>{user.gender}</p>
          <p>{user.age}</p>
          <p>{user.balance}</p>
          {
            (user.gender === 'male' && user.age >= 18 && user.age <= 27) ? <p>v/o</p> : <p>nv/o</p>
          }
          
    </div>
  )
}

export default TableRow