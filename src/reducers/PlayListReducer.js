import * as ACTIONS from '../actions';
import stateTree from './initState';

export function PlayListReducer(state = stateTree.PlayList, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ACTIONS.PlayListActions.ADD_IMAGE:
            return Object.assign(newState, {
                Items: [
                    ...state.Items, {
                        Id: action.id,
                        Name: "NoTitle"
                    }
                ]
            });
        case ACTIONS.PlayListActions.DELETE_IMAGE:
            return Object.assign(newState, {
                Items: state
                    .Items
                    .reduce(p => p.id !== action.id)
            });
        case ACTIONS.PlayListActions.SAVE_IMAGE:
            break;
        case ACTIONS.PlayListActions.SAVE_PLAYLIST:
            break;
        case ACTIONS.PlayListActions.IMPORT_IMAGE:
            break;
        
        case ACTIONS.PlayListActions.PLAYLIST_CHANGE:
        return Object.assign( action.data, {ActiveItem:-1,
            Items:action.data.Items.map((p,id)=>{
                return  Object.assign(p,
                {
                id:p.PlayListTemplateItemID,
                img:p.ImageContent||""
                ,delay: p.Delay,
                
                // width: p.Width,
                // height: p.Height,
                name: p.ImageName,
                isChanged: false,
                order:p.PlayOrder
            }) })
        });
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
                if(currentOrder===nextOrder)
                    ++currentOrder;
                
                Object.assign(newState, {
                    Items: state
                        .Items
                        .map(p => {

                            if (p.id === action.id) 
                                return Object.assign({}, p, {
                                    isChanged: true,
                                    order: nextOrder,
                                    img:action.currentImage
                                });
                            if (p.id === action.TargetId) 
                                return Object.assign({}, p, {
                                    isChanged: true,
                                    order: currentOrder,
                                    img:action.nextImage                                
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