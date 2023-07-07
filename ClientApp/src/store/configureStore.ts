import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import queryBookEpic from '../behavior/book/epic';
import queryWishListEpic from '../behavior/wishList/epic';
import { AppState, RootAction } from '../behavior/types';
import { State } from '.';
import { bookReducer } from '../behavior/book/reducer';
import { wishListReducer } from '../behavior/wishList/reducer';

export default function configureStore(history: History, initialState?: State) {
    const epicMiddleware = createEpicMiddleware<RootAction, RootAction, AppState>();

    const middleware = applyMiddleware(thunk, routerMiddleware(history), epicMiddleware);

    const rootReducer = combineReducers({ //TODO: make func like combine(history) move to rootReducer file
        book: bookReducer,
        wishList: wishListReducer,
        router: connectRouter(history),
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const rootEpic = combineEpics(queryBookEpic, queryWishListEpic);

    const store = createStore(rootReducer, {}, compose(middleware, ...enhancers));

    epicMiddleware.run(rootEpic);

    return store;
}