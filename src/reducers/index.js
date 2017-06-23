import * as ACTIONS from '../actions';
import stateTree from './initState';
import {combineReducers} from 'redux'
import {PlayListReducer} from "./PlayListReducer";
//import store from  "../store";


function DeviceReducer(state = stateTree.VMSGroups, action) {
    switch (action.type) {
        case ACTIONS.DeviceManager.DeviceActions.FILTER:
            return Object.assign({},state,{filterExpr:action.filterText});
        
        case ACTIONS.DeviceManager.DeviceActions.FETCH_STARTED:
            return Object.assign({},state,{IsFetching:true});
        case ACTIONS.DeviceManager.DeviceActions.FETCH_SUCCESS:
            return Object.assign({},state,{IsFetching:false,List:action.data});
        case ACTIONS.DeviceManager.DeviceActions.FETCH_FAILED:
            return Object.assign({},state,{IsFetching:false});
        
        case ACTIONS.DeviceManager.DeviceActions.FETCH_VMS_DETAILS_STARTED:
            return Object.assign({},state,{IsFetching:true});
        case ACTIONS.DeviceManager.DeviceActions.FETCH_VMS_DETAILS_SUCCESS:
            return Object.assign({},state
            ,{IsFetching:true, 
            ActiveVMS:action.data.VMSID,    
                Details:Object.assign({},state.Details||{},{[action.data.VMSID]:action.data})});
        case ACTIONS.DeviceManager.DeviceActions.FETCH_VMS_DETAILS_FAILED:
            return Object.assign({},state,{IsFetching:false});
            

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

const CurrentVMS = combineReducers({VMSProps: PropertiesReducer, Playlist: PlayListReducer});

const IDE_REDUX = combineReducers({VMSGroups: DeviceReducer, CurrentVMS: CurrentVMS});

export default IDE_REDUX;
