import { ofType, Epic } from 'redux-observable';
import { from, of, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import { QUERY_BOOK_REQUEST, RootAction, queryBookFailure, queryBookSuccess } from './actions';
import { getBookQuery } from './queries';
import type { Book, RootState } from './types';
import { Action } from 'redux';
import type { StateObservable } from 'redux-observable';

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<RootState>
) => Observable<TAction>;

const queryBookEpic: CustomEpic<RootAction> = (action$, state$) => action$.pipe(
  ofType(QUERY_BOOK_REQUEST),
  switchMap((action) =>
    executeGraphqlQuery(getBookQuery, {
      id: action.payload,
    }).pipe(
      tap(console.log),
      map((response: any) => response.data.book),
      map((book: Book) => queryBookSuccess(book)),
      catchError((error) => of(queryBookFailure(error)))
    )
  )
);


export default queryBookEpic;
