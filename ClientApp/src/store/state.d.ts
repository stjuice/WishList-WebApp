import { BookState, } from 'behavior/book';
import { WishListState } from 'behavior/wishList';

type AppState = {
  book?: BookState | undefined;
  wishList?: WishListState | undefined;
}

declare module 'react-redux' {
  interface DefaultRootState extends AppState { }
}