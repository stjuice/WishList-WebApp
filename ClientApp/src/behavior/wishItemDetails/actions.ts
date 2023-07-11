import type { WishItemDetails, WishItemInput } from "./types";

export const REQUEST_WISHITEM_DETAILS = 'REQUEST_WISHITEM_DETAILS' as const;
export const requestWishItemDetails = (itemId: string) => ({
  type: REQUEST_WISHITEM_DETAILS,
  payload: itemId,
});

export const REQUEST_WISHITEM_DETAILS_SUCCESS = 'REQUEST_WISHITEM_DETAILS_SUCCESS' as const;
export const requestWishItemDetailsSuccessDetails = (wishItem: WishItemDetails) => ({
  type: REQUEST_WISHITEM_DETAILS_SUCCESS,
  payload: wishItem,
});

export const REQUEST_WISHITEM_DETAILS_FAILURE = 'REQUEST_WISHITEM_DETAILS_FAILURE' as const;
export const requestWishItemDetailsFailureDetails = (error: Error) => ({
  type: REQUEST_WISHITEM_DETAILS_FAILURE,
  payload: error,
});

export const ADD_NEW_WISHITEM = 'ADD_NEW_WISHITEM' as const;
export const addNewWishItem = (newWishItem: WishItemInput) => ({
  type: ADD_NEW_WISHITEM,
  payload: newWishItem,
});

export type WishItemDetailsActions = ReturnType<
  | typeof requestWishItemDetails
  | typeof requestWishItemDetailsSuccessDetails
  | typeof requestWishItemDetailsFailureDetails
  | typeof addNewWishItem
  >;