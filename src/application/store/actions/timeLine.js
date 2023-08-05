import { FAIL, SUCCESS, GET_PROFILE, SELECTED_USER } from "../action-types";

export const getUserInformation = () => (dispatch) =>
  dispatch({
    type: GET_PROFILE,
    payload: {
      request: {
        url: "https://panorbit.in/api/users.json",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      options: {
        onSuccess({ response }) {
          const { data, error } = response;
          if (data.status !== 500) {
            dispatch({
              type: `${GET_PROFILE}_${SUCCESS}`,
              payload: { ...data },
            });
            return Promise.resolve({ ...data });
          }
          dispatch({
            type: `${GET_PROFILE}_${FAIL}`,
            payload: { ...error },
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: { data: dataError },
            } = exception.error;
            dispatch({
              type: `${GET_PROFILE}_${FAIL}`,
              payload: { dataError },
            });
            return Promise.reject(dataError);
          }
          dispatch({ type: `${GET_PROFILE}_${FAIL}`, payload: {} });
          return Promise.reject();
        },
      },
    },
  });
export const postSelectedUser = (payload) => (dispatch) =>
  dispatch({
    type: SELECTED_USER,
    payload: payload,
  });
