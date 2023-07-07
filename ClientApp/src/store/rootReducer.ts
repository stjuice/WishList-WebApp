import { combineReducers } from 'redux';
import { bookReducer } from '../behavior/book/reducer';
import { wishListReducer } from '../behavior/wishList/reducer';

const rootReducer = combineReducers({
  book: bookReducer,
  wishList: wishListReducer,
});

export default rootReducer;
