// reducers/popupReducer.js
const initialState = {
    visiblePopup: null,
  };
  
  const popupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_POPUP':
        return {
          ...state,
          visiblePopup: action.payload.name,
        };
      case 'HIDE_POPUP':
        return {
          ...state,
          visiblePopup: null,
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default popupReducer;
  