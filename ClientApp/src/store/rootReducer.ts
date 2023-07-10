import type { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { wishListReducer } from '../behavior/wishList/reducer';
import { wishItemDetailsReducer } from '../behavior/wishItemDetails/reducer';

const createRootReducer = (history: History) => combineReducers({
  wishList: wishListReducer,
  wishItemDetails: wishItemDetailsReducer,
  router: connectRouter(history),
});

export default createRootReducer;
