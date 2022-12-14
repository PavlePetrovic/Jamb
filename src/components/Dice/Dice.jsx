import { useState } from 'react'

import Die from './Die'
import styles from './Dice.module.scss'
import { useEffect } from 'react'

const Dice = () => {
   const [diceNumbers, setDiceNumbers] = useState([])
   
   useEffect( () => {
      setDiceNumbers(() => {
         const newArr = []
   
         for (let i = 0; i < 6; i++) {
            let newNum = Math.floor(Math.random() * 6) + 1
            newArr.push(newNum)
         }
   
         return newArr
      })
   }, [])

   const showDice = diceNumbers.map( (value, i) => {
      return <Die key={i} num={value} />
   }) 

  return (
    <div className={styles['dice-box']}>
      {showDice}
    </div>
  )
}

export default Dice