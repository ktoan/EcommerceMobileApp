import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    isShowPopup: false,
    options: [
      { label: "Hide", onClick: () => {} },
      { label: "Edit", onClick: () => {} },
      { label: "Hide", onClick: () => {} },
    ],
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowPopup: (state, action) => {
      state.popup.isShowPopup = action.payload;
    },
  },
});

export const { setShowPopup } = appSlice.actions;

export default appSlice.reducer;
