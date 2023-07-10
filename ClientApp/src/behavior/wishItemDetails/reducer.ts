import { REQUEST_WISHITEM_DETAILS, REQUEST_WISHITEM_DETAILS_FAILURE, REQUEST_WISHITEM_DETAILS_SUCCESS } from "./actions";
import { WishItemDetailsState } from "./types";

const initialState: WishItemDetailsState = {
  loading: false,
  error: null,
  data: null,
};

export const wishItemDetailsReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case REQUEST_WISHITEM_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case REQUEST_WISHITEM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REQUEST_WISHITEM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
