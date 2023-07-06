import { Book, BookInput } from './types';


export const REQUEST_BOOK_DETAILS = 'REQUEST_BOOK_DETAILS' as const;
export const requestBookDetails = (id: string) => ({
  type: REQUEST_BOOK_DETAILS,
  payload: id,
});

export const REQUEST_BOOK_DETAILS_SUCCESS = 'REQUEST_BOOK_DETAILS_SUCCESS' as const;
export const requestBookSuccessDetails = (book: Book) => ({
  type: REQUEST_BOOK_DETAILS_SUCCESS,
  payload: book,
});

export const REQUEST_BOOK_DETAILS_FAILURE = 'REQUEST_BOOK_DETAILS_FAILURE' as const;
export const requestBookFailureDetails = (error: Error) => ({
  type: REQUEST_BOOK_DETAILS_FAILURE,
  payload: error,
});

export const ADD_BOOK = 'ADD_BOOK' as const;
export const addBook = (newBook: BookInput) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export type RootAction = ReturnType<
  | typeof requestBookDetails
  | typeof requestBookSuccessDetails
  | typeof requestBookFailureDetails
  | typeof addBook
  >;
