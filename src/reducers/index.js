import * as ACTIONS from '../actions';
import stateTree from './initState';
import {combineReducers} from 'redux'
import {CanvasReducer} from "./CanvasReducer";
import {PlayListReducer} from "./PlayListReducer";

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



const CurrentVMS = combineReducers({VMSProps: PropertiesReducer, Playlist: PlayListReducer, CurrentCanvas: CanvasReducer});

const IDE_REDUX = combineReducers({VMSGroups: DeviceReducer, CurrentVMS: CurrentVMS});

export default IDE_REDUX;
