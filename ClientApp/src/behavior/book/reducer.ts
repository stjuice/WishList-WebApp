import { REQUEST_BOOK_DETAILS_FAILURE, REQUEST_BOOK_DETAILS, REQUEST_BOOK_DETAILS_SUCCESS, BookAction } from "./actions";
import { BookState } from "./types";

const initialState: BookState = {
  loading: false,
  error: null,
  data: null,
};

export const bookReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case REQUEST_BOOK_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case REQUEST_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REQUEST_BOOK_DETAILS_FAILURE:
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
