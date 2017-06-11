import * as ACTIONS from '../actions';
import stateTree from './initState';

export function PlayListReducer(state = stateTree.PlayList, action) {
    switch (action.type) {
        case ACTIONS.PlayListActions.ADD_IMAGE:
            return Object.assign({}, state, {
                items: [
                    ...state.items, {
                        Id: action.id,
                        Name: "NoTitle"
                    }
                ]
            });
        case ACTIONS.PlayListActions.DELETE_IMAGE:
            return state
                .items
                .reduce(p => p.id !== action.id);
        case ACTIONS.PlayListActions.SAVE_IMAGE:
            break;
        case ACTIONS.PlayListActions.SAVE_PLAYLIST:
            break;
        case ACTIONS.PlayListActions.IMPORT_IMAGE:
            break;
        case ACTIONS.PlayListActions.CHANGE_ACTIVE_ITEM:
            return Object.assign({}, state, {activeItem: action.id});

        default:
            return state;
    }

}