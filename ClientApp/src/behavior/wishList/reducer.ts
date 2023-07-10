import { REQUEST_WISHLIST, REQUEST_WISHLIST_FAILURE, REQUEST_WISHLIST_SUCCESS } from "./actions";
import { WishListState } from "./types";

const initialState: WishListState = {
  loading: false,
  error: null,
  data: null,
};

export const wishListReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case REQUEST_WISHLIST:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case REQUEST_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REQUEST_WISHLIST_FAILURE:
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
