import { RouterActionType } from 'connected-react-router';
import { WishListState } from '../behavior/wishList';
import { WishItemDetailsState } from '../behavior/wishItemDetails';

export type State = {
    wishList?: WishListState | undefined;
    wishItemDetails?: WishItemDetailsState | undefined;
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
