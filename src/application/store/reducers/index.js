import { combineReducers } from "redux";
import { SUCCESS, LOGOUT } from "../action-types";
import timeLine from "./timeLine";
const rootReducer = combineReducers({
  timeLine,
});

const appReducer = (state, action) => {
  if (action.type === `${LOGOUT}_${SUCCESS}`) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};
export default appReducer;
