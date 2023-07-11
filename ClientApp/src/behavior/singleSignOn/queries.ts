export const getSsoSettingsQuery = `
  query GetSsoSettings() {
    ssoSettings() {
      clientId
    }
  }
`;