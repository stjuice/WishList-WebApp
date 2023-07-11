import { StateObservable } from 'redux-observable';
import { Action } from 'redux';
import { History } from 'history';
import { Observable } from 'rxjs';
import type { WishListActions } from './wishList/actions';
import type { WishItemDetailsActions } from './wishItemDetails/actions';
import type { WishListRootState } from './wishList';
import type { WishItemDetailsRootState } from './wishItemDetails';
import type { UserRootState, UserActions } from './user';
import type { SsoSettingsRootState } from './singleSignOn';
import type { SsoSettingsActions } from './singleSignOn/actions';

export type AppState = {
  wishList?: WishListRootState;
  wishItemDetails?: WishItemDetailsRootState;
  user?: UserRootState;
  ssoSettings?: SsoSettingsRootState;
}

export type RootAction = WishListActions | WishItemDetailsActions | UserActions | SsoSettingsActions;

export type StoreDependencies = {
  history?: History
};

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<AppState>,
  dependencies: StoreDependencies
  ) => Observable<TAction>;