import { QUERY_BOOK_FAILURE, QUERY_BOOK_REQUEST, QUERY_BOOK_SUCCESS } from "./actions";
import { BookState } from "./types";

const initialState: BookState = {
  loading: false,
  error: null,
  data: null,
};

export const bookReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case QUERY_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case QUERY_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case QUERY_BOOK_FAILURE:
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
