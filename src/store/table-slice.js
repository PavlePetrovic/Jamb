import { createSlice } from "@reduxjs/toolkit";

import { data } from './table-data'

const tableSlice = createSlice({
   name: 'tableData',
   initialState: {
      gameData: data,
      diceNumbers: [],
      diceSum: null
   },
   reducers: {
      updateGameData(state, action) {
         const newCellId = action.payload
         const activeCell = state.gameData.find((cellData) => cellData.id === newCellId)

         if (activeCell) {
            activeCell.value = 5
            activeCell.changed = true
         }
      },
      updateDiceNumbers(state) {
         const newNumbers = []
   
         for (let i = 0; i < 6; i++) {
            let newNum = Math.floor(Math.random() * 6) + 1
            newNumbers.push(newNum)
         }
   
         state.diceNumbers = newNumbers
      },
      getDiceSum(state) {
         // startingValue is what we passed as second argumend of reduce() js method -> 0
         const sum = state.diceNumbers.reduce((startingValue, iterateValue) => {
            return startingValue + iterateValue
         }, 0)

         state.diceSum = sum
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice