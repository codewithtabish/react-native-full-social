import { combineReducers } from 'redux';
import authReducer from './auth.js'; // Assuming your authSlice file exports the reducer as authReducer
import types from '../types';
import appSettingSlice from './appSettingSlice.js';

const appReducer = combineReducers({
   authReducer,
   appSettingSlice
  // Add other reducers here if needed
});

const rootReducer = (state, action) => {
  if (action.type === types.Clear_Reduc_State) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

