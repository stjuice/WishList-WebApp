import type { RootState as BookRootState } from './book/types';
import type { RootState as WishListRootState } from './wishList/types';
import type { RootAction as BookAction } from './book/actions';
import type { RootAction as WishListAction } from './wishList/actions';

export type AppState = {
  book?: BookRootState | undefined;
  wishList?: WishListRootState | undefined;
}

export type RootAction = BookAction | WishListAction;