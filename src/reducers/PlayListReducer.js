import * as ACTIONS from '../actions';
import stateTree from './initState';
import {CanvasReducer} from './CanvasReducer';

export function PlayListReducer(state = stateTree.PlayList, action) {
    let newState={};
    switch (action.type) {
        case ACTIONS.PlayListActions.ADD_IMAGE:
            return Object.assign(newState, state, {
                items: [
                    ...state.items, {
                        Id: action.id,
                        Name: "NoTitle"
                    }
                ]
            });
        case ACTIONS.PlayListActions.DELETE_IMAGE:
            return Object.assign(newState, state, {
                items:state.items.reduce(p => p.id !== action.id)
            });
        case ACTIONS.PlayListActions.SAVE_IMAGE:
            break;
        case ACTIONS.PlayListActions.SAVE_PLAYLIST:
            break;
        case ACTIONS.PlayListActions.IMPORT_IMAGE:
            break;
        case ACTIONS.PlayListActions.CHANGE_ACTIVE_ITEM:
            return Object.assign(newState, state, {activeItem: action.Id,Canvas:action.Canvas});

        default:
            Object.assign(newState,state,{Canvas: CanvasReducer(state.activeItem,action)});
            return newState;
    }

}