import { createSlice } from "@reduxjs/toolkit";

const data = [
   {
      id: 'colDownRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colUpDownRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colUpRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colAnnounceRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colRandomRowOne',
      value: null,
      changed: false
   }, 
   {
      id: 'colHandRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colDownRowTwo',
      value: null,
      changed: false
   },
   {
      id: 'colUpDownRowTwo',
      value: null,
      changed: false
   },
   {
      id: 'colUpRowTwo',
      value: null,
      changed: false
   },
   {
      id: 'colAnnounceRowTwo',
      value: null,
      changed: false
   },
   {
      id: 'colRandomRowTwo',
      value: null,
      changed: false
   }, 
   {
      id: 'colHandRowTwo',
      value: null,
      changed: false
   },
   {
      id: 'colDownRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colUpDownRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colUpRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colAnnounceRowOne',
      value: null,
      changed: false
   },
   {
      id: 'colRandomRowOne',
      value: null,
      changed: false
   }, 
   {
      id: 'colHandRowOne',
      value: null,
      changed: false
   },
]

const tableSlice = createSlice({
   name: 'tableData',
   initialState: {
      gameData: data
   },
   reducers: {
      updateGameData(state, action) {
         const newCellId = action.payload
         const activeCell = state.gameData.find((cellData) => cellData.id === newCellId)

         if (activeCell) {
            activeCell.value = 5
            activeCell.changed = true
         }
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice