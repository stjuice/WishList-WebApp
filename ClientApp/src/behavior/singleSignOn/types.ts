export type SsoSettings = {
  clientId: string;
}

export type SsoSettingsState = {
  loading: boolean;
  error: string | null;
  data: SsoSettings | null; 
}

export type RootState = {
  ssoSettings: SsoSettings | null;
  isLoading: boolean;
  error: Error | null;
};