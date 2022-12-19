import { createSlice } from "@reduxjs/toolkit";

import { data } from './table-data'

const diceNumbersData = [
   { id: 'dice-one', value: null, picked: false },
   { id: 'dice-two', value: null, picked: false },
   { id: 'dice-three', value: null, picked: false },
   { id: 'dice-four', value: null, picked: false },
   { id: 'dice-five', value: null, picked: false },
   { id: 'dice-six', value: null, picked: false }
]

const tableSlice = createSlice({
   name: 'tableData',
   initialState: {
      gameData: data,
      diceNumbers: diceNumbersData,
      diceSum: null,
      diceRollCount: 0,
      cellFilled: false,
      endSum: null,
      gameOver: false
   },
   reducers: {
      updateCellData(state, action) {
         const selectedCellId = action.payload
         const activeCell = state.gameData.find((cellData) => cellData.id === selectedCellId)
         
         if (activeCell && !activeCell.changed) {
            activeCell.value = state.diceSum
            activeCell.changed = true
         }

         state.diceRollCount = 1
         state.diceNumbers.forEach(die => die.picked = false)
         state.diceSum = null
      },
      updateDiceNumbers(state) {
         state.diceNumbers.forEach(die => {
            if (!die.picked) {
               die.value = Math.floor(Math.random() * 6) + 1
            }
         })

         if (state.diceRollCount <= 4) {
            state.diceRollCount = state.diceRollCount + 1
         }
      },
      cellFilledHandler(state, action) {
         state.cellFilled = action.payload
      },
      holdDice(state, action) {
         const pickedDieId = action.payload

         state.diceNumbers.forEach(die => {
            if (die.id === pickedDieId) {
               die.picked = !die.picked
            }
         })
      },
      getDiceSum(state) {
         let anyDiceIsHold = false
         
         state.diceNumbers.forEach(num => {
            if (num.picked === true) {
               anyDiceIsHold = true
            }
         })

         let sum = null
         
         if (anyDiceIsHold) {
            state.diceNumbers.forEach(num => {
               if (num.picked === true) {
                  sum = sum + num.value
               }
            })
         } else {
            // startingValue is what we passed as second argumend of reduce() js method -> 0
            sum = state.diceNumbers.reduce((startingValue, iterateValue) => {
               return startingValue + iterateValue.value
            }, 0)
         }

         state.diceSum = sum
      },
      endGame(state) {
         const colIds = ['colDown', 'colUpDown', 'colUp', 'colAnnounce', 'colRandom', 'colHand']

         const sumArr = []

         for (let col in colIds) {
            let sum = null

            const one = state.gameData.find(colData => colData.id === `${colIds[col]}RowOne`)
            const two = state.gameData.find(colData => colData.id === `${colIds[col]}RowTwo`)
            const three = state.gameData.find(colData => colData.id === `${colIds[col]}RowThree`)
            const four = state.gameData.find(colData => colData.id === `${colIds[col]}RowFour`)
            const five = state.gameData.find(colData => colData.id === `${colIds[col]}RowFive`)
            const six = state.gameData.find(colData => colData.id === `${colIds[col]}RowSix`)
            const max = state.gameData.find(colData => colData.id === `${colIds[col]}RowMax`)
            const min = state.gameData.find(colData => colData.id === `${colIds[col]}RowMin`)
            const triling = state.gameData.find(colData => colData.id === `${colIds[col]}RowTriling`)
            const kenta = state.gameData.find(colData => colData.id === `${colIds[col]}RowKenta`)
            const full = state.gameData.find(colData => colData.id === `${colIds[col]}RowFull`)
            const poker = state.gameData.find(colData => colData.id === `${colIds[col]}RowPoker`)
            const jamb = state.gameData.find(colData => colData.id === `${colIds[col]}RowJamb`)

            const oneToSix = [one, two, three, four, five, six]
            const specials = [triling, kenta, full, poker, jamb]

            const trilingBonus = 20
            const kentaBonus = 50
            const fullBonus = 30
            const pokerBonus = 40
            const jambBonus = 50

            const bonusSum = trilingBonus + kentaBonus + fullBonus + pokerBonus + jambBonus

            let oneToSixSum = null
            let maxMinSum = null
            let specialsSum = bonusSum
            
            for (let num in oneToSix) {
               oneToSixSum = oneToSixSum + oneToSix[num].value
            }

            maxMinSum = one.value * (max.value - min.value)

            for (let num in specials) {
               if (specials[num].value === null && specials[num].id.includes('Triling')) {
                  specialsSum = specialsSum - trilingBonus
               } else if (specials[num].value === null && specials[num].id.includes('Kenta')) {
                  specialsSum = specialsSum - kentaBonus
               } else if (specials[num].value === null && specials[num].id.includes('Full')) {
                  specialsSum = specialsSum - fullBonus
               } else if (specials[num].value === null && specials[num].id.includes('Poker')) {
                  specialsSum = specialsSum - pokerBonus
               } else if (specials[num].value === null && specials[num].id.includes('Jamb')) {
                  specialsSum = specialsSum - jambBonus
               } else {
                  specialsSum = specialsSum + specials[num].value
               }
            }

            if (oneToSixSum > 60) {
               oneToSixSum = oneToSixSum + 30
            }
            if (maxMinSum > 60) {
               maxMinSum = maxMinSum + 60
            }

            sum = oneToSixSum + maxMinSum + specialsSum

            sumArr.push(sum)
         }

         for (let sum in sumArr) {
            state.endSum = state.endSum + sumArr[sum]
         }
      },
      isGameOverHandler(state) {
         let isItOver = true
         state.gameData.forEach(cell => {
            if (cell.value === null) {
               isItOver = false
            }
         })
         state.gameOver = isItOver
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice