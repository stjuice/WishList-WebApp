// types.ts

import { QUERY_BOOK_FAILURE, QUERY_BOOK_REQUEST, QUERY_BOOK_SUCCESS } from "./actions";

export type BookState = {
  loading: boolean;
  error: string | null;
  data: Book | null; // Replace 'any' with the appropriate type for your book data
};

export type Book = {
  id: string;
  title: string;
  authorId: string;
};

export type RootState = {
  book: Book | null;
  isLoading: boolean;
  error: Error | null;
};

export type QueryBookRequestAction = {
  type: typeof QUERY_BOOK_REQUEST;
  payload: string;
};

export type QueryBookSuccessAction = {
  type: typeof QUERY_BOOK_SUCCESS;
  payload: Book;
};

export type QueryBookFailureAction = {
  type: typeof QUERY_BOOK_FAILURE;
  payload: Error;
};

  // export type RootAction = QueryBookRequestAction | QueryBookSuccessAction | QueryBookFailureAction;

