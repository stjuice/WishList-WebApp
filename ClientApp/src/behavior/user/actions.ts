import type { User, UserInput } from "./types";

export const REQUEST_USER = 'REQUEST_USER' as const;
export const requestUser = (email: string) => ({
  type: REQUEST_USER,
  payload: email,
});

export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS' as const;
export const requestUserSuccessDetails = (user: User) => ({
  type: REQUEST_USER_SUCCESS,
  payload: user,
});

export const REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE' as const;
export const requestUserFailureDetails = (error: Error) => ({
  type: REQUEST_USER_FAILURE,
  payload: error,
});

export const ADD_NEW_USER = 'ADD_NEW_USER' as const;
export const addNewUser = (newUser: UserInput) => ({
  type: ADD_NEW_USER,
  payload: newUser,
});

export const USER_LOGOUT = 'USER_LOGOUT' as const;
export const userLogout = () =>({
  type: USER_LOGOUT,
})

export type UserActions = ReturnType<
  | typeof requestUser
  | typeof requestUserSuccessDetails
  | typeof requestUserFailureDetails
  | typeof addNewUser
  | typeof userLogout
  >;
