// reducers/popupReducer.js
const initialState = {
  visiblePopup: null,
  visibleNews: true,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        visiblePopup: action.payload.name,
      };
    case "HIDE_POPUP":
      return {
        ...state,
        visiblePopup: null,
      };
    case "HIDE_NEWS":
      return {
        ...state,
        visibleNews: false,
      };
    default:
      return state;
  }
};

export default popupReducer;
