///Device Manager
import fetch from 'isomorphic-fetch'
const DeviceUrl= "VMss/VMs_List";
const DeviceDetailsURL="VMss/VMs_Details?Id=";


export const DeviceActions={
    FILTER:"FILTER_VMS",
    SELECTED_VMS_Changed:"SELECTED_VMS_Changed",
    FETCH_VMS_DETAILS_STARTED:"FETCH_VMS_DETAILS_STARTED",
    FETCH_VMS_DETAILS_SUCCESS:"FETCH_VMS_DETAILS_SUCCESS",
    FETCH_VMS_DETAILS_FAILED:"FETCH_VMS_DETAILS_STARTED",
    
    Reload:"Reload_VMS",
    FETCH_STARTED:"FETCH_STARTED",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    FETCH_FAILED:"FETCH_FAILED",
    // FETCH_VMS_DETAILS_STARTED:"FETCH_VMS_DETAILS_STARTED",
    // FETCH_VMS_DETAILS_SUCCESS:"FETCH_VMS_DETAILS_SUCCESS",
    // FETCH_VMS_DETAILS_FAILED:"FETCH_VMS_DETAILS_FAILED"
}

export const FilterVMS = (filterText) => {
    return {type: DeviceActions.FILTER, filterText}
}

export const SelectVMS = (id) => {
    return (dispatch) => {
        dispatch({type: DeviceActions.FETCH_VMS_DETAILS_STARTED, id});
        fetch(window.baseURL + DeviceDetailsURL + id, {credentials: 'include'}).then(res => res.json(), err => {
            alert(err);
            dispatch({type: DeviceActions.FETCH_FAILED, err})
        }).then(data => {
            dispatch({type: DeviceActions.FETCH_VMS_DETAILS_SUCCESS, data: data.VMS});
            dispatch({type: "PLAYLIST_CHANGE", data: data.PlayList, id})
        });

    }

}

export const FetchList = () => {
    return (dispatch) => {
        dispatch({type: DeviceActions.FETCH_STARTED});
        fetch(window.baseURL + DeviceUrl, {credentials: 'include'}).then(res => res.json(), err => {
            alert("failed");
            dispatch({type: DeviceActions.FETCH_FAILED})
        }).then(json => dispatch({type: DeviceActions.FETCH_SUCCESS, data: json}));

    }
}