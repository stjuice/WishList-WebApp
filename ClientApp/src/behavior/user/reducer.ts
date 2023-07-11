import { REQUEST_USER, REQUEST_USER_FAILURE, REQUEST_USER_SUCCESS, USER_LOGOUT } from "./actions";
import { UserState } from "./types";

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
};

export const userReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REQUEST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      }
    default:
      return state;
  }
};
