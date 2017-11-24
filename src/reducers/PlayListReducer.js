import * as ACTIONS from '../actions';
import stateTree from './initState';

function assignPlayListItem(p) {
    return {
        id: p.PlayListTemplateItemID,
        img: p.ImageContent || "",
        delay: p.Delay || 10,
        Delay: p.Delay || 10,
        //ImageID:p.ImageId, width: p.Width, height: p.Height,
        name: p.ImageName,
        isChanged: false,
        order: p.PlayOrder 
    };
}

export function PlayListReducer(state = stateTree.PlayList, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ACTIONS.PlayListActions.ADD_PLAYLIST_ITEM:

            let p = action.data;
            return Object.assign(newState, {
                Items: [
                    ...state.Items,
                    Object.assign(assignPlayListItem(p), {
                        order: Math.max(...state.Items.map(x => x.order),1) + 1

                    })
                ]
            });
        case ACTIONS.PlayListActions.DELETE_PLAYLIST_ITEM:
            return Object.assign(newState, {
                Items: state
                    .Items
                    .filter(p => p.id !== action.id)
            });

        case ACTIONS.PlayListActions.UPDATE_PLAYLIST_ITEM:
            return Object.assign(newState, {
                Items: state
                    .Items
                    .map((p, id) => {
                        if (p.id === action.Item.id) {
                            return Object.assign({}, p, action.Item);
                        }
                        return p;
                    })
            });

        case ACTIONS.PlayListActions.IMPORT_PLAYLIST_ITEM:
            return Object.assign(newState, {
                Items: state
                    .Items
                    .map((p, id) => {
                        if (p.id === state.ActiveItem) {
                            return Object.assign({}, p, 
                            {img: action.data.ImageContent,ImageID:action.data.ImageID,ImageName:action.data.ImageName});
                        }
                        return p;
                    })
            });

        case ACTIONS.PlayListActions.PLAYLIST_CHANGE:
            if (action.data) 
                return Object.assign(action.data, {
                    ActiveItem: -1,
                    Items: action
                        .data
                        .Items
                        .map((p, id) => {
                            return Object.assign(p, assignPlayListItem(p))
                        })
                });
            return null;
            
        case ACTIONS.PlayListActions.SWAP_IMAGE:
            if (action.TargetId) {
                let currentOrder = newState
                    .Items
                    .find(p => p.id === action.id)
                    .order;
                let nextOrder = newState
                    .Items
                    .find(p => p.id === action.TargetId)
                    .order;
                if (currentOrder === nextOrder) 
                    ++currentOrder;
                
                Object.assign(newState, {
                    Items: state
                        .Items
                        .map(p => {

                            if (p.id === action.id) 
                                return Object.assign({}, p, {
                                    isChanged: true,
                                    order: nextOrder,
                                    img: action.currentImage
                                });
                            if (p.id === action.TargetId) 
                                return Object.assign({}, p, {
                                    isChanged: true,
                                    order: currentOrder,
                                    img: action.nextImage
                                });
                            return p;
                        })
                });
            }

            break;

        case ACTIONS.PlayListActions.CHANGE_ACTIVE_ITEM:
            Object.assign(newState, {ActiveItem: action.Id});
            break;
        case ACTIONS.PlayListActions.INSERT_OBJECT:
            Object.assign(newState, {
                Items: state
                    .Items
                    .map((p) => {
                        if (p.id !== state.ActiveItem
                            ? true
                            : false) 
                            return p;
                        else {
                            return Object.assign({}, p, {isChanged: true});
                        }
                    })
            });
            break;

        default:
            break;
    }
    return newState;

}