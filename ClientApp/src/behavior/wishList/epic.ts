import { ofType } from 'redux-observable';
import { of, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import { REQUEST_WISHLIST, requestWishListFailureDetails, requestWishListSuccessDetails } from './actions';
import { getWishListQuery } from './queries';
import type { WishList } from './types';
import { Action } from 'redux';
import type { StateObservable } from 'redux-observable';
import { AppState, RootAction } from '../types';

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<AppState>
) => Observable<TAction>;

const epic: CustomEpic<RootAction> = (action$) => {
  const wishList$ = action$.pipe(
    ofType(REQUEST_WISHLIST),
    switchMap(_ =>
      executeGraphqlQuery(getWishListQuery).pipe(
        map((response: any) => response.data.wishList),
        map((wishList: WishList) => requestWishListSuccessDetails(wishList)),
        catchError((error) => of(requestWishListFailureDetails(error)))
      )
    )
  );

  return wishList$;
}

export default epic;