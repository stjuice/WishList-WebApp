import { BookState, } from '../behavior/book/types';
import { WishListState } from '../behavior/wishList/types';

type AppState = {
  book?: BookState | undefined;
  wishList?: WishListState | undefined;
}

declare module 'react-redux' {
  interface DefaultRootState extends AppState { }
}