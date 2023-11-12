import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousPage: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPreviousPage: (state, payload) => {
      state.previousPage = payload.page;
    },
  },
});

export const { setPreviousPage } = appSlice.actions;

export default appSlice.reducer;
