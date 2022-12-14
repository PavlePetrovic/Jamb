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
      diceSum: null
   },
   reducers: {
      updateCellData(state, action) {
         const selectedCellId = action.payload
         const activeCell = state.gameData.find((cellData) => cellData.id === selectedCellId)
         
         if (activeCell && !activeCell.changed) {
            activeCell.value = state.diceSum
            activeCell.changed = true
         }
      },
      updateDiceNumbers(state) {
         state.diceNumbers.forEach(die => {
            if (!die.picked) {
               die.value = Math.floor(Math.random() * 6) + 1
            }
         })
      },
      holdDice(state, action) {
         const pickedDieId = action.payload

         state.diceNumbers.forEach(die => {
            if (die.id === pickedDieId) {
               die.picked = true
            }
         })
      },
      getDiceSum(state) {
         // startingValue is what we passed as second argumend of reduce() js method -> 0
         const sum = state.diceNumbers.reduce((startingValue, iterateValue) => {
            return startingValue + iterateValue.value
         }, 0)

         state.diceSum = sum
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice