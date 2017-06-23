import * as ACTIONS from '../actions';
import stateTree from './initState';
import {combineReducers} from 'redux'
import {PlayListReducer} from "./PlayListReducer";
<<<<<<< HEAD
//import store from  "../store";

=======
import store from "../store";
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8

function DeviceReducer(state = stateTree.VMSGroups, action) {
    switch (action.type) {
        case ACTIONS.DeviceManager.DeviceActions.FILTER:
<<<<<<< HEAD
            return Object.assign({},state,{filterExpr:action.filterText});
        
=======
            return Object.assign({}, state, {filterExpr: action.filterText});
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8
        case ACTIONS.DeviceManager.DeviceActions.FETCH_STARTED:
            return Object.assign({}, state, {IsFetching: true});
        case ACTIONS.DeviceManager.DeviceActions.FETCH_SUCCESS:
            return Object.assign({}, state, {
                IsFetching: false,
                List: action.data
            });
        case ACTIONS.DeviceManager.DeviceActions.FETCH_FAILED:
<<<<<<< HEAD
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
            
=======
            return Object.assign({}, state, {IsFetching: false});
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8

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

const defaultState = {
    SelectedVMS: -1,
    IsFetching: true,
    DeviceList: {
        123: {
            "ShutDownTemprature": null,
            "PlayListScheduleChildren": null,
            "RuleItemMessageChildren": null,
            "VMSActionChildren": null,
            "PlayListTemplateChildren": null,
            "VMSID": 1,
            "VMSGroupRef": 1,
            "VMSGroup": null,
            "LocationRef": 1,
            "Location": null,
            "CommunicationTypeRef": 2,
            "CommunicationType": null,
            "ControllerTypeRef": 1,
            "ControllerType": null,
            "VMSName": "4",
            "AssetCode": "444",
            "Latitude": 0.00,
            "Longitude": 0.00,
            "Ip": "192.168.1.10",
            "Port": 1200,
            "Direction": null,
            "Type": 0,
            "Width": 320,
            "Height": 80,
            "DotPitch": 0,
            "LastState": 0,
            "State": 0,
            "Description": null,
            "CreatedBy": null,
            "Created": null,
            "ModifyBy": null,
            "Modified": "2017/05/08"
        }
    },
    Playlists: {
        12: {
            "PlayListTemplateID": 1,
            "PlayListTemplateName": "لیست نمایشی 1",
            PlayListItems: {
                22: {
                    "PlayListTemplateItemID": 1,
                    "PlayOrder": 0,
                    "PlayListTemplateItemName": "آیتم نمایشی 1",
                    "Delay": 10,
                    "ImageID": 1,
                    "ImageContent": "{\"objects\":[{\"type\":\"circle\",\"originX\":\"left\",\"originY\":\"top\",\"le" +
                            "ft\":77,\"top\":24.98,\"width\":319.88,\"height\":319.88,\"fill\":\"#c8c885\",\"" +
                            "stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"but" +
                            "t\",\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":1.23,\"scale" +
                            "Y\":0.67,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":nu" +
                            "ll,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonz" +
                            "ero\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"sk" +
                            "ewX\":0,\"skewY\":0,\"radius\":159.94059386257265,\"startAngle\":0,\"endAngle\":" +
                            "6.283185307179586},{\"type\":\"i-text\",\"originX\":\"left\",\"originY\":\"top\"" +
                            ",\"left\":42,\"top\":30.08,\"width\":148.96,\"height\":45.2,\"fill\":\"rgb(0,0,0" +
                            ")\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\"" +
                            ":\"butt\",\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":1,\"sc" +
                            "aleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":nu" +
                            "ll,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonz" +
                            "ero\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"sk" +
                            "ewX\":0,\"skewY\":0,\"text\":\"asdfsfsd\",\"fontSize\":40,\"fontWeight\":\"norma" +
                            "l\",\"fontFamily\":\"arial\",\"fontStyle\":\"\",\"lineHeight\":1.16,\"textDecora" +
                            "tion\":\"\",\"textAlign\":\"left\",\"textBackgroundColor\":\"\",\"charSpacing\":" +
                            "0,\"styles\":{\"0\":{\"1\":{},\"2\":{},\"3\":{},\"4\":{},\"5\":{},\"6\":{},\"7\"" +
                            ":{},\"8\":{}}}}]}",
                    "ImageURL": null
                }
            }
        }

    }

};

function RootReducer(state=defaultState, action) {
    return {
        ActiveVMS:-1,
        ActivePlayList:-1,
        IsFetching:state.IsFetching,
        DeviceList:DeviceReducer(state,action),
        Playlists:Object.assign({},state.Playlists,{[state.ActivePlayList]:PlayListReducer(state.Playlist[state.ActiveVMS],action)})
    };
    
}

//export default RootReducer;
