import { createSlice } from "@reduxjs/toolkit";

import { data } from './table-data'

const tableSlice = createSlice({
   name: 'tableData',
   initialState: {
      gameData: data,
      dicesNumber: null,
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
      getDicesNumer(state, action) {
         const newNum = action.payload
         state.dicesNumber = newNum
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice