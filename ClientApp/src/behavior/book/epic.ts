import { ofType, Epic } from 'redux-observable';
import { from, of, Observable, merge } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import { ADD_BOOK, REQUEST_BOOK_DETAILS, RootAction, requestBookFailureDetails, requestBookSuccessDetails } from './actions';
import { addBookMutation, getBookQuery } from './queries';
import type { Book, RootState } from './types';
import { Action } from 'redux';
import type { StateObservable } from 'redux-observable';

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<RootState>
) => Observable<TAction>;

const epic: CustomEpic<RootAction> = (action$, state$) => {
  const book$ = action$.pipe(
    ofType(REQUEST_BOOK_DETAILS),
    switchMap((action) =>
      executeGraphqlQuery(getBookQuery, {
        id: action.payload,
      }).pipe(
        map((response: any) => response.data.book),
        map((book: Book) => requestBookSuccessDetails(book)),
        catchError((error) => of(requestBookFailureDetails(error)))
      )
    )
  );

  const addBook$ = action$.pipe(
    ofType(ADD_BOOK),
    switchMap((action) => executeGraphqlQuery(addBookMutation, { input: action.payload }).pipe(
      map((response: any) => response.data.addBook),
      map((book: Book) => requestBookSuccessDetails(book)),
      catchError((error) => of(requestBookFailureDetails(error)))
    ))
  )

  return merge(book$, addBook$);
}

export default epic;
