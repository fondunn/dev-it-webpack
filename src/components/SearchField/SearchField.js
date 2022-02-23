import React, {useState, useEffect} from "react";
import { searchBy } from '../../helpers/helpers'
import {arrayOfObject} from '../../const/data'

const SearchField = ({ setSearchTerm }) => {
    
    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <input type="text" placeholder='Search by Name' onChange={handleChange}/>
    )
}

export default SearchField