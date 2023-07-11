import type { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { wishListReducer } from '../behavior/wishList/reducer';
import { wishItemDetailsReducer } from '../behavior/wishItemDetails/reducer';
import { userReducer } from 'src/behavior/user/reducer';
import { ssoSettingsReducer } from 'src/behavior/singleSignOn/reducer';

const createRootReducer = (history: History) => combineReducers({
  wishList: wishListReducer,
  wishItemDetails: wishItemDetailsReducer,
  user: userReducer,
  ssoSettings: ssoSettingsReducer,
  router: connectRouter(history),
});

export default createRootReducer;
