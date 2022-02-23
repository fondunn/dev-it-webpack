import React from "react";
import TableRow from "../TableRow/TableRow";

const TableContainer = ({searchResults}) => {
  // console.log(searchResults);
  const fake = {age: 'age', gender: 'gender', name: 'name', balance: 'balance'}
    return (
        <div>
            <TableRow user={fake}/>
            {

              searchResults.map(user => {
                  if( user ) {
                    return <TableRow user={user}/>
                  } else {
                    return <p>no results</p>
                  }

                })
            }
        </div>
    )
}

export default TableContainer