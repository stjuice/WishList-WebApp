import { combineReducers, Reducer, CombinedState } from 'redux';
import { bookReducer } from '../behavior/book/reducer';
import { BookState } from '../behavior/book/types';

// Define the root state type
interface RootState {
  book: BookState;
}

const rootReducer: Reducer<CombinedState<RootState>> = combineReducers<RootState>({
  book: bookReducer,
});

export default rootReducer;
