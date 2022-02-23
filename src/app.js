import React, { useState, useEffect } from 'react'
import Navigation from "./components/Navigation/Navigation";
import TableContainer from "./components/TableContainer/TableContainer";
import { arrayOfObject } from './const/data'
import { searchByName, searchByGender } from './helpers/helpers'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const result = searchByName(arrayOfObject, searchTerm)
    setSearchResults(result)
  }, [searchTerm]);

  return (
    <div>
      <Navigation setSearchTerm={setSearchTerm} setSearchResults={setSearchResults}/>
      <TableContainer searchResults={searchResults}/>
    </div>
  )
}

export default App