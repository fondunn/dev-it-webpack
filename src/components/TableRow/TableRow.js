import React from "react";
import './style.scss'

const TableRow = ({user}) => {
  return (
    <div className='tr'>
          <input type='checkbox'/>
          <p>{user.name}</p>
          <p>{user.gender}</p>
          <p>{user.balance}</p>
          <p>v/o</p>
    </div>
  )
}

export default TableRow