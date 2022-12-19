import { useDispatch, useSelector } from 'react-redux'

import { tableActions } from '../../store/table-slice'
import styles from './End.module.scss'

const End = () => {
   const dispatch = useDispatch()
   const endSum = useSelector(state => state.tableData.endSum)

   const endHandle = () => {
      dispatch(tableActions.endGame())
      console.log(endSum);
   }

  return (
    <>
      <button className={styles.end} onClick={endHandle} >Finish Game</button>
    </>
  )
}

export default End