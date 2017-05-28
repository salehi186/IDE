import { combineReducers } from 'redux'
import {PlayListActions} from './ActionCreator';

function DeviceReducer(state =[], action){
        switch (action.type) {
            case "FILTER_VMS":
                if(action.filterText.trim()=="")
                return state;
                else
                return state.reduce(p=> p.title.indexOf(action.filterText)>-1);
                break;
        
            default :
                break;
        }
}


function PlayListReducer(state=[],action){
    
    switch (action.type) {
        case PlayListActions.ADD_IMAGE:
            return [...state,{Id:action.id,Name:"NoTitle"}] ;       
            break;
        case PlayListActions.DELETE_IMAGE:
            return state.reduce(p=>p.id !== action.id);
            break;
        case PlayListActions.SAVE_IMAGE:

            break;
        case PlayListActions.SAVE_PLAYLIST:
        
        break;

        case PlayListActions.IMPORT_IMAGE:
        
        break;
        
        default:
            return state;
    }

}

export default IDE_REDUX =combineReducers(
    {
    Playlist:PlayListReducer,
    VMSGroups:DeviceReducer}
);



