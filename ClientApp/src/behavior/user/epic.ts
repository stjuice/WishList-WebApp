import { ofType } from 'redux-observable';
import { of, Observable, merge } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import { ADD_NEW_USER, REQUEST_USER, requestUser, requestUserFailureDetails, requestUserSuccessDetails } from './actions';
import { addNewUserMutation, getUserQuery } from './queries';
import type { User } from './types';
import { Action } from 'redux';
import type { StateObservable } from 'redux-observable';
import { AppState, RootAction } from '../types';

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<AppState>
) => Observable<TAction>;

const epic: CustomEpic<RootAction> = (action$) => {
  const user$ = action$.pipe(
    ofType(REQUEST_USER),
    pluck('payload'),
    switchMap(email =>
      executeGraphqlQuery(getUserQuery, { email }).pipe(
        map((response: any) => response.data.user),
        map((user: User) => requestUserSuccessDetails(user)),
        catchError((error) => of(requestUserFailureDetails(error)))
      )
    )
  );

  const addNewUser$ = action$.pipe(
    ofType(ADD_NEW_USER),
    pluck('payload'),
    switchMap((input) => executeGraphqlQuery(addNewUserMutation, { input }).pipe(
      map((response: any) => response.data.addNewUser),
      map((user: User)=> requestUser(user.email)),
      catchError((error) => of(requestUserFailureDetails(error)))
    ))
  )

  return merge(user$, addNewUser$);
}

export default epic;
