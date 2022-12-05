import React from 'react'

import styles from './TableRow.module.scss'

const TableRow = ({ rowType, rowValue, sum }) => {

   const CELL_I_ID = 'colDown' + 'Row' + rowType
   const CELL_II_ID = 'colUpDown' + 'Row' + rowType
   const CELL_III_ID = 'colUp' + 'Row' + rowType
   const CELL_IV_ID = 'colAnnounce' + 'Row' + rowType
   const CELL_V_ID = 'colRandom' + 'Row' + rowType
   const CELL_VI_ID = 'colHand' + 'Row' + rowType

   console.log(CELL_I_ID, CELL_II_ID, CELL_III_ID, CELL_IV_ID, CELL_V_ID, CELL_VI_ID);

  return (
   <tr className={sum ? styles['table-row-sum'] : ''}>
      <th>{rowValue}</th>
      <td>
         <div>
            <input type="text" id={CELL_I_ID}/>
         </div>
      </td>
      <td>
         <div>
            <input type="text" id={CELL_II_ID}/>
         </div>
      </td>
      <td>
         <div>
            <input type="text" id={CELL_III_ID}/>
         </div>
      </td>
      <td>
         <div>
            <input type="text" id={CELL_IV_ID}/>
         </div>
      </td>
      <td>
         <div>
            <input type="text" id={CELL_V_ID}/>
         </div>
      </td>
      <td>
         <div>
            <input type="text" id={CELL_VI_ID}/>
         </div>
      </td>
   </tr>
  )
}

export default TableRow