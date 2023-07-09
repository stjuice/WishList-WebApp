import { BookState, } from '../behavior/book';
import { WishItemDetailsState } from '../behavior/wishItemDetails';
import { WishListState } from '../behavior/wishList';

type AppState = {
  book?: BookState | undefined;
  wishList?: WishListState | undefined;
  wishItemDetails?: WishItemDetailsState | undefined;
}

declare module 'react-redux' {
  interface DefaultRootState extends AppState { }
}