import { WishItemDetailsState } from '../behavior/wishItemDetails';
import { WishListState } from '../behavior/wishList';

type AppRootState = {
  wishList?: WishListState | undefined;
  wishItemDetails?: WishItemDetailsState | undefined;
}

declare module 'react-redux' {
  interface DefaultRootState extends AppRootState { }
}