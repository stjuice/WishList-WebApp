// types.ts

import { REQUEST_BOOK_DETAILS_FAILURE, REQUEST_BOOK_DETAILS, REQUEST_BOOK_DETAILS_SUCCESS, ADD_BOOK } from "./actions";

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

export type BookInput = {
  title: string;
  authorId: string;
}

export type RootState = {
  book: Book | null;
  isLoading: boolean;
  error: Error | null;
};

export type requestBookDetailsAction = {
  type: typeof REQUEST_BOOK_DETAILS;
  payload: string;
};

export type requestBookSuccessDetailsAction = {
  type: typeof REQUEST_BOOK_DETAILS_SUCCESS;
  payload: Book;
};

export type requestBookFailureDetailsAction = {
  type: typeof REQUEST_BOOK_DETAILS_FAILURE;
  payload: Error;
};

export type addBookAction = {
  type: typeof ADD_BOOK;
  payload: BookInput;
};

  // export type RootAction = requestBookDetailsAction | requestBookSuccessDetailsAction | requestBookFailureDetailsAction; //TODO: delete types

