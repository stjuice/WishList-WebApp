import type { History } from 'history';
import type { AppState, RootAction } from '../behavior/types';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import queryWishListEpic from '../behavior/wishList/epic';
import queryWishItemDetails from '../behavior/wishItemDetails/epic';
import createRootReducer from './rootReducer';

export default function configureStore(history: History) {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, AppState>({
    dependencies: {
      history: history,
    },
  });
  const middleware = applyMiddleware(thunk, routerMiddleware(history), epicMiddleware);

  const rootReducer = createRootReducer(history);

  const enhancers = [];
  const windowIfDefined = typeof window === 'undefined' ? null : window as any;
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootEpic = combineEpics(queryWishListEpic, queryWishItemDetails);

  const store = createStore(rootReducer, {}, compose(middleware, ...enhancers));

  epicMiddleware.run(rootEpic);

  return store;
}