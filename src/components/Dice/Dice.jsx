import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { tableActions } from '../../store/table-slice'
import Die from './Die'
import styles from './Dice.module.scss'

const Dice = () => {
   const dispatch = useDispatch()
   const diceNumbers = useSelector(state => state.tableData.diceNumbers)
   const diceSum = useSelector(state => state.tableData.diceSum)
   const rollCounter = useSelector(state => state.tableData.diceRollCount)

   useEffect(() => {
      dispatch(tableActions.updateDiceNumbers())
   }, [dispatch])

   const showDice = diceNumbers.map(die => {
      return (
         <Die key={die.id} id={die.id} num={die.value} hold={die.picked} />
      )
   }) 

   const onRollDicesHandle = () => {
      dispatch(tableActions.updateDiceNumbers())
      dispatch(tableActions.getDiceSum())
   }

  return (
   <>
    <div className={styles['dice-box']}>
      {showDice}
    </div>
    <div className={styles['roll-btn-div']}>
       <p className={diceSum ? styles['dice-sum'] : ''}>
         {diceSum ? diceSum : ''}
       </p>
       <button 
         className={styles['roll-btn']}
         onClick={onRollDicesHandle}
         disabled={rollCounter >= 3}
       >
            Roll
       </button>
    </div>
   </>
  )
}

export default Dice