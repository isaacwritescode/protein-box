// reducers/index.js
import { combineReducers } from 'redux';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  // Add other reducers if needed
});

export default rootReducer;
