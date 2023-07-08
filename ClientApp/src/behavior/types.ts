import type { BookRootState } from './book';
import type { WishListRootState } from './wishList';
import type { BookAction } from './book/actions';
import type { WishListAction } from './wishList/actions';

export type AppState = {
  book?: BookRootState | undefined;
  wishList?: WishListRootState | undefined;
}

export type RootAction = BookAction | WishListAction;