import React from "react";
import TableRow from "../TableRow/TableRow";

const TableContainer = ({users}) => {
    return (
        <div>
            <TableRow user={'dsd'}/>
            {

                users.map(user => {
                  if( user ) {
                    return <TableRow user={user}/>
                  }

                })
            }
        </div>
    )
}

export default TableContainer