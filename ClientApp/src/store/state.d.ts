import type { UserState } from '../behavior/user';
import type { WishItemDetailsState } from '../behavior/wishItemDetails';
import type { WishListState } from '../behavior/wishList';
import type { SsoSettingsState } from '../behavior/singleSignOn';

type AppRootState = {
  wishList?: WishListState | undefined;
  wishItemDetails?: WishItemDetailsState | undefined;
  user?: UserState | undefined;
  ssoSettings?: SsoSettingsState | undefined;
}

declare module 'react-redux' {
  interface DefaultRootState extends AppRootState { }
}