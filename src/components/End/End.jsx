import { useDispatch } from 'react-redux'

import { tableActions } from '../../store/table-slice'
import styles from './End.module.scss'

const End = () => {
   const dispatch = useDispatch()

   const endHandle = () => {
      dispatch(tableActions.endGame())
   }

  return (
    <>
      <button className={styles.end} onClick={endHandle} >Finish Game</button>
    </>
  )
}

export default End