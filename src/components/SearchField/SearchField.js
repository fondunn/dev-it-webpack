import React, {useState, useEffect} from "react";
import { searchBy } from '../helpers/helpers'
import {arrayOfObject} from '../../const/data'

const SearchField = ({ setUsers, users }) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log(searchBy(users, search))
        setUsers(searchBy(users, search))
    },[search])

    const changes = (e) => {
        setUsers(arrayOfObject)
        setSearch(e.target.value)
    }

    return (
        <input type="text" placeholder='Search by Name' onChange={changes}/>
    )
}

export default SearchField