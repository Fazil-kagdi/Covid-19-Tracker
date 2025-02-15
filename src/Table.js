import React from 'react'
import './Table.css'
import numeral from "numeral";

function Table({countries}) {
    return (
        <div className="table">
            {
                countries.map(({country,cases}) =>(
                    <tr>
                        <td>
                            {country}
                        </td>
                        <strong>
                            {numeral(cases).format("0,0")}
                        </strong>
                        <td>

                        </td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table
