import React, { useState, useEffect } from "react";


const Dropdown = ({ handleChange, property }) => {

    console.log(property);

    return (
        <select onChange={handleChange}>
            {
                property.map(prop => (
                    <option value={prop}>{prop}</option>
                ))
            }
        </select>

    )
}

export default Dropdown