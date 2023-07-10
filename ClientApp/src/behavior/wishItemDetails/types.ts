export type WishItemDetails = {
  id: string;
  title: string;
  priceInfo: PriceInfo;
  link: string;
  additionalInfo?: string;
}

export type PriceInfo = {
  price: number;
  currencyId: string;
};

export type WishItemDetailsState = {
  loading: boolean;
  error: string | null;
  data: WishItemDetails | null;
}

export type WishItemDetailsRootState = WishItemDetails;

export type WishItemInput = {
  title: string;
  priceInfo: PriceInfo;
  link: string;
  additionalInfo?: string;
}