import { configureStore } from "@reduxjs/toolkit";

import tableSlice from "./table-slice";

const store = configureStore({
   reducer: {
      tableData: tableSlice.reducer
   }
})

export default store