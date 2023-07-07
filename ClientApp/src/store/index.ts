import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import queryBookEpic from '../behavior/book/epic';
import { RootAction } from '../behavior/book/actions';
import { BookState, RootState } from '../behavior/book/types';
import { bookReducer } from '../behavior/book/reducer';
import { AppState } from './state';
import { RouterActionType } from 'connected-react-router';
import { WishListState } from '../behavior/wishList/types';

// The top-level state object
export type State = {
    book?: BookState | undefined;
    wishList?: WishListState | undefined;
    router?: {
        location: {
            pathname: string;
            search: string;
            state: unknown;
            hash: string;
            key?: string | undefined;
        };
        action: RouterActionType;
    } | undefined;
}

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => State): void;
}
