import { SsoSettings } from "./types";

export const REQUEST_SSO_SETTINGS = 'REQUEST_SSO_SETTINGS' as const;
export const requestSsoSettings = () => ({
  type: REQUEST_SSO_SETTINGS,
})

export const REQUEST_SSO_SETTINGS_SUCCESS = 'REQUEST_SSO_SETTINGS_SUCCESS' as const;
export const requestSsoSettingsSuccessDetails = (settings: SsoSettings) => ({
  type: REQUEST_SSO_SETTINGS_SUCCESS,
  payload: settings,
});

export const REQUEST_SSO_SETTINGS_FAILURE = 'REQUEST_SSO_SETTINGS_FAILURE' as const;
export const requestSsoSettingsFailureDetails = (error: Error) => ({
  type: REQUEST_SSO_SETTINGS_FAILURE,
  payload: error,
});

export type SsoSettingsActions = ReturnType<
  | typeof requestSsoSettings
  | typeof requestSsoSettingsSuccessDetails
  | typeof requestSsoSettingsFailureDetails
  >;