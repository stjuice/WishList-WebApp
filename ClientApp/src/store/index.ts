import { RouterActionType } from 'connected-react-router';
import { BookState } from 'behavior/book';
import { WishListState } from 'behavior/wishList';

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
