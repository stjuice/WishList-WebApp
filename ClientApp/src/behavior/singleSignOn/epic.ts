import { ofType } from 'redux-observable';
import { of, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { executeGraphqlQuery } from '../../graphClient';
import { REQUEST_SSO_SETTINGS, requestSsoSettingsFailureDetails, requestSsoSettingsSuccessDetails } from './actions';
import { getSsoSettingsQuery } from './queries';
import type { SsoSettings } from './types';
import { Action } from 'redux';
import type { StateObservable } from 'redux-observable';
import { AppState, RootAction } from '../types';

export type CustomEpic<TAction extends Action> = (
  action$: Observable<TAction>,
  state$: StateObservable<AppState>
) => Observable<TAction>;

const epic: CustomEpic<RootAction> = (action$) => {
  const ssoSettings$ = action$.pipe(
    ofType(REQUEST_SSO_SETTINGS),
    switchMap(_ =>
      executeGraphqlQuery(getSsoSettingsQuery).pipe(
        map((response: any) => response.data.ssoSettings),
        map((ssoSettings: SsoSettings) => requestSsoSettingsSuccessDetails(ssoSettings)),
        catchError((error) => of(requestSsoSettingsFailureDetails(error)))
      )
    )
  );

  return ssoSettings$;
}

export default epic;
