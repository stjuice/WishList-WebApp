export type PriceInfo = {
  price: number;
  currencyId: string;
};

export type WishItem = {
  id: string;
  title: string;
  priceInfo: PriceInfo;
  link: string;
  additionalInfo?: string;
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