import React from 'react'

import styles from './TableRow.module.scss'

const TableRow = (props) => {
  return (
   <tr className={props.sum ? styles['table-row-sum'] : ''}>
      <th>{props.rowType}</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
   </tr>
  )
}

export default TableRow