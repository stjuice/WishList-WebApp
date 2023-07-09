import { ofType } from 'redux-observable';
import { empty, merge, of } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import {
  REQUEST_WISHITEM_DETAILS,
  REQUEST_WISHITEM_DETAILS_SUCCESS,
  requestWishItemDetailsFailureDetails,
  requestWishItemDetailsSuccessDetails,
} from './actions';
import { getWishItemDetailsQuery } from './queries';
import type { WishItemDetails } from './types';
import type { CustomEpic, RootAction } from '../types';

const epic: CustomEpic<RootAction> = (action$, _, { history }) => {
  const wishItemDetails$ = action$.pipe(
    ofType(REQUEST_WISHITEM_DETAILS),
    pluck('payload'),
    switchMap(itemId =>
      executeGraphqlQuery(getWishItemDetailsQuery, { id: itemId }).pipe(
        map((response: any) => response.data.wishItem),
        map((wishItem: WishItemDetails) => requestWishItemDetailsSuccessDetails(wishItem)),
        catchError((error) => of(requestWishItemDetailsFailureDetails(error)))
      )
    )
  );

  const navigateToWishItem$ = action$.pipe(
    ofType(REQUEST_WISHITEM_DETAILS_SUCCESS),
    pluck('payload'),
    tap(wishListItem => {
      const wishListId = wishListItem.id;
      history && history.push(`/wishItem/${wishListId}`);
    }),
    switchMap(() => {
      return empty();
    }),
  );

  return merge(wishItemDetails$, navigateToWishItem$);
}

export default epic;
