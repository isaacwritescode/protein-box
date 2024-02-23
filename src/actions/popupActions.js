// actions/popupActions.js
export const showPopup = (name) => ({
  type: "SHOW_POPUP",
  payload: { name },
});

export const hidePopup = () => ({
  type: "HIDE_POPUP",
});

export const hideNews = () => ({
  type: "HIDE_NEWS",
});
