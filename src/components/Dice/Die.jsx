import { useDispatch } from 'react-redux'

import { tableActions } from '../../store/table-slice'
import styles from './Die.module.scss'

const Die = ({ num, id, hold }) => {
  const dispatch = useDispatch()

  const holdDieHandle = (e) => {
    dispatch(tableActions.holdDice(e.target.id))
  } 

  return (
    <button
      id={id} 
      className={hold ? styles['picked-die'] : styles.die}
      onClick={holdDieHandle}
    >
      {num}
    </button>
  )
}

export default Die