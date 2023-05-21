import { Action } from 'redux';
import { Book } from './types';

export const QUERY_BOOK_REQUEST = 'QUERY_BOOK_REQUEST' as const;
export const QUERY_BOOK_SUCCESS = 'QUERY_BOOK_SUCCESS' as const;
export const QUERY_BOOK_FAILURE = 'QUERY_BOOK_FAILURE' as const;

export const queryBookRequest = (id: string) => ({
  type: QUERY_BOOK_REQUEST,
  payload: id,
});

export const queryBookSuccess = (book: Book) => ({
  type: QUERY_BOOK_SUCCESS,
  payload: book,
});

export const queryBookFailure = (error: Error) => ({
  type: QUERY_BOOK_FAILURE,
  payload: error,
});

export type RootAction = ReturnType<
  | typeof queryBookRequest
  | typeof queryBookSuccess
  | typeof queryBookFailure
  >;
