import {combineReducers} from 'redux'
import * as ACTIONS from '../actions';
import stateTree from './initState';

function DeviceReducer(state = stateTree.VMSGroups, action) {
    switch (action.type) {
        case "FILTER_VMS":
            if (action.filterText.trim() === "") 
                return state;
            else 
                return state.reduce(p => p.title.indexOf(action.filterText) > -1);
        default:
            return state;
    }
}

function PlayListReducer(state = stateTree.PlayList ,action) {
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
            return Object.assign({},state,{activeItem:action.id});    
      default:
            return state;
    }

}

function PropertiesReducer(state = stateTree.CurrentVMS.Props, action) {
    switch (action.type) {
        case ACTIONS.PropertiesActions.RELOAD_PROPS:
            return state;
        case ACTIONS.PropertiesActions.SET_All:
            return state;
        case ACTIONS.PropertiesActions.SET_PROPS:
            return state;
        default:
            return state;
    }
}

///Convas manipulation
function CanvasReducer(state=null,action){
    switch (action.type) {
        case ACTIONS.CanvasActions.INSERT_OBJECT:
                state.
            
            break;
    
        default:
            return state;
    }
}


const CurrentVMS=combineReducers(
         {
             VMSProps:PropertiesReducer,
             Playlist: PlayListReducer,
             CurrentCanvas:CanvasReducer
         }
);

const IDE_REDUX = combineReducers(
    {
     VMSGroups: DeviceReducer,
     CurrentVMS:CurrentVMS
    });

export default IDE_REDUX;



