import { PriceInfo } from "../wishItemDetails/types";

export type WishItem = { // leave few fields
  id: string;
  title: string;
  priceInfo: PriceInfo;
  link: string;
};

export type WishList = WishItem[];

export type WishListState = {
  loading: boolean;
  error: string | null;
  data: WishList | null; 
}

export type RootState = {
  wishList: WishList | null;
  isLoading: boolean;
  error: Error | null;
};