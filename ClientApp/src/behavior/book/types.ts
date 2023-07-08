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
