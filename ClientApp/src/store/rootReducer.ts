import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { bookReducer } from 'behavior/book/reducer';
import { wishListReducer } from 'behavior/wishList/reducer';

const createRootReducer = (history: History) => combineReducers({
  book: bookReducer,
  wishList: wishListReducer,
  router: connectRouter(history),
});

export default createRootReducer;
