import { WishList } from "./types";

export const REQUEST_WISHLIST = 'REQUEST_WISHLIST' as const;
export const requestWishList = () => ({
  type: REQUEST_WISHLIST,
});

export const REQUEST_WISHLIST_SUCCESS = 'REQUEST_WISHLIST_SUCCESS' as const;
export const requestWishListSuccessDetails = (wishList: WishList) => ({
  type: REQUEST_WISHLIST_SUCCESS,
  payload: wishList,
});

export const REQUEST_WISHLIST_FAILURE = 'REQUEST_WISHLIST_FAILURE' as const;
export const requestWishListFailureDetails = (error: Error) => ({
  type: REQUEST_WISHLIST_FAILURE,
  payload: error,
});

export type RootAction = ReturnType<
  | typeof requestWishList
  | typeof requestWishListSuccessDetails
  | typeof requestWishListFailureDetails
  >;
