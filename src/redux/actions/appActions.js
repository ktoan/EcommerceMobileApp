import { setShowPopup } from "../slices/appSlice";

export const toggleBottomPopup = (dispatch, show) => {
  dispatch(setShowPopup(show));
};
