import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
   name: 'tableData',
   initialState: {
      isWork: true
   },
   reducers: {
      checkIsItWork(state) {
         state.isWork = !state.isWork
      },
      writeElementId(state, action) {
         console.log(action.payload);
      }
   }
})

export const tableActions = tableSlice.actions

export default tableSlice