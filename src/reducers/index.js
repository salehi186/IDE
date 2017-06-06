import { combineReducers } from 'redux'
import {PlayListActions} from '../actions';

function DeviceReducer(state =[], action){
       
        switch (action.type) {
            case "FILTER_VMS":
                if(action.filterText.trim()==="")
                return state;
                else
                return state.reduce(p=> p.title.indexOf(action.filterText)>-1);
        
            default :
                    return  [
                {
                    title: "test",
                    VMS: [
                        {
                            name: "Shahid ghandi",
                            id: "123"
                        }, {
                            name: "Kave",
                            id: "124"
                        }
                    ]
                }, {
                    title: "large",
                    VMS: [
                        {
                            name: "nikbakht",
                            id: "122"
                        }, {
                            name: "ferdosi",
                            id: "121"
                        }
                    ]
                }
            ];
        }
}


function PlayListReducer(state={},action){
   
    switch (action.type) {
        case PlayListActions.ADD_IMAGE:
            return Object.assign({},state,{
           items: [...state.items,{Id:action.id,Name:"NoTitle"}]}) ;       
        case PlayListActions.DELETE_IMAGE:
            return state.items.reduce(p=>p.id !== action.id);
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

const IDE_REDUX =combineReducers(
    {
    Playlist:PlayListReducer,
    VMSGroups:DeviceReducer}
);

export default IDE_REDUX;



