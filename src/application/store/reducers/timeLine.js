import { FAIL, SUCCESS, GET_PROFILE, SELECTED_USER } from "../action-types";

const initialState = {
  isLoading: false,
  userInformation: {},
  selectedUser: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return { ...state, isLoading: true };
    case `${GET_PROFILE}_${SUCCESS}`:
      return { ...state, userInformation: { ...payload }, isLoading: false };
    case `${GET_PROFILE}_${FAIL}`:
      return { ...state, error: { ...payload }, isLoading: false };

    case SELECTED_USER:
      return { ...state, selectedUser: { ...payload }, isLoading: false };

    default:
      return state;
  }
};
