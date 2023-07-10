import { StateObservable } from 'redux-observable';
import { Action } from 'redux';
import type { WishListAction } from './wishList/actions';
import type { WishItemDetailsAction } from './wishItemDetails/actions';
import type { WishListRootState } from './wishList';
import type { WishItemDetailsRootState } from './wishItemDetails';
import { Observable } from 'rxjs';
import { History } from 'history';

export type AppState = {
  wishList?: WishListRootState | undefined;
  wishItemDetails?: WishItemDetailsRootState | undefined;
}

export type RootAction = WishListAction | WishItemDetailsAction;

export type StoreDependencies = {
  history?: History
};

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<AppState>,
  dependencies: StoreDependencies
  ) => Observable<TAction>;
