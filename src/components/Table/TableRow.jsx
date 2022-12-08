import { useDispatch } from 'react-redux';

import { tableActions } from '../../store/table-slice';
import styles from './TableRow.module.scss'

const TableRow = ({ rowType, rowValue, sum }) => {
   const dispatch = useDispatch()

   const CELL_I_ID = 'colDownRow' + rowType
   const CELL_II_ID = 'colUpDownRow' + rowType
   const CELL_III_ID = 'colUpRow' + rowType
   const CELL_IV_ID = 'colAnnounceRow' + rowType
   const CELL_V_ID = 'colRandomRow' + rowType
   const CELL_VI_ID = 'colHandRow' + rowType

   const onClickGetId = (e) => {
      dispatch(tableActions.writeElementId(e.target.id))
   }

  return (
   <tr className={sum ? styles['table-row-sum'] : ''}>
      <th>{rowValue}</th>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_I_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_II_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_III_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_IV_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_V_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
      <td>
         <div>
            <input 
               type="text" 
               id={CELL_VI_ID}
               onClick={onClickGetId}
            />
         </div>
      </td>
   </tr>
  )
}

export default TableRow