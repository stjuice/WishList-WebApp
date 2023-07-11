export const isUserAuthenticated = !!localStorage.getItem('authToken');
export const setAuthToken = (token: string) => localStorage.setItem('authToken', token);
export const resetAuthToken = () => localStorage.removeItem('authToken');