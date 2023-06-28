import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, reducers } from './';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import queryBookEpic from '../behavior/book/epic';
import { RootState } from '../behavior/book/types';
import { RootAction } from '../behavior/book/actions';

export default function configureStore(history: History, initialState?: ApplicationState) {
    const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

    const middleware = applyMiddleware(thunk, routerMiddleware(history), epicMiddleware);

    const rootReducer = combineReducers({ //TODO: move to rootReducer file
        ...reducers,
        router: connectRouter(history),
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const rootEpic = combineEpics(queryBookEpic);
    const store = createStore(rootReducer, initialState, compose(middleware, ...enhancers));

    epicMiddleware.run(rootEpic);

    return store;
}

