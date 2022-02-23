import React from "react";
import SearchField from "../SearchField/SearchField";
import Dropdown from "../Dropdown/Dropdown";
import { arrayOfObject } from '../../const/data'
import { searchByGender, searchByLetter } from '../../helpers/helpers'

const Navigation = ({ setSearchTerm, setSearchResults }) => {

    const gender = e => {
        const value = e.target.value
        const results = searchByGender(arrayOfObject, value)
        setSearchResults(results)
      }
    
    const az = e => {
        const value = e.target.value
        const results = searchByLetter(arrayOfObject, value)
        setSearchResults(results)
    }

    const genderSelect = ['any', 'male', 'female', 'army']
    const azSelect = ['any', 'A-z', 'Z-a']

    return (
        <div>
            <SearchField setSearchTerm={setSearchTerm}/>
            <Dropdown handleChange={gender} property={genderSelect}/>
            <Dropdown handleChange={az} property={azSelect}/>
        </div>
    )
}

export default Navigation