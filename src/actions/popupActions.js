// actions/popupActions.js
export const showPopup = (name) => ({
    type: 'SHOW_POPUP',
    payload: { name },
  });
  
  export const hidePopup = () => ({
    type: 'HIDE_POPUP',
  });
  // Add other action creators as needed
  