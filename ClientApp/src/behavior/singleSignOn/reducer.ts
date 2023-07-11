import { REQUEST_SSO_SETTINGS, REQUEST_SSO_SETTINGS_FAILURE, REQUEST_SSO_SETTINGS_SUCCESS } from "./actions";
import { SsoSettingsState } from "./types";

const initialState: SsoSettingsState = {
  loading: false,
  error: null,
  data: null,
};

export const ssoSettingsReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case REQUEST_SSO_SETTINGS:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case REQUEST_SSO_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REQUEST_SSO_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
