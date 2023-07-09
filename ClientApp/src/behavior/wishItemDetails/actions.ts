import { WishItemDetails } from "./types";

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

export type WishItemDetailsAction = ReturnType<
  | typeof requestWishItemDetails
  | typeof requestWishItemDetailsSuccessDetails
  | typeof requestWishItemDetailsFailureDetails
  >;
