import React from 'react'

import styles from './TableRow.module.scss'

const TableRow = (props) => {
  return (
   <tr className={props.sum ? styles['table-row-sum'] : ''}>
      <th>{props.rowType}</th>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
      <td>
         <div>
            <input type="text"/>
         </div>
      </td>
   </tr>
  )
}

export default TableRow