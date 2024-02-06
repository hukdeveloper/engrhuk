const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sidebarOpen: false,
};
const Slice = createSlice({
  name: "changeSidebarMode",
  initialState,
  reducers: {
    changeSidebar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { changeSidebar } = Slice.actions;
export default Slice.reducer;
