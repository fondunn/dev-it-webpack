import React from "react";
import SearchField from "../SearchField/SearchField";
import Dropdown from "../Dropdown/Dropdown";

const Navigation = ({ setUsers, users }) => {

    return (
        <div>
            <SearchField setUsers={setUsers} users={users}/>
            <Dropdown />
            <Dropdown />
        </div>
    )
}

export default Navigation