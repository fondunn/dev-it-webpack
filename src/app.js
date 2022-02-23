import React, {useState, useEffect} from 'react'
import Navigation from "./components/Navigation/Navigation";
import TableContainer from "./components/TableContainer/TableContainer";
import {arrayOfObject} from './const/data'

function App() {
  const [users, setUsers] = useState(arrayOfObject)





  return(
    <div>
      <Navigation setUsers={setUsers} users={users}/>
      <TableContainer users={users}/>
    </div>
  )
}

export default App