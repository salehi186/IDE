///Device Manager
import fetch from 'isomorphic-fetch'
const DeviceUrl="http://192.168.1.4:45455/VMss/VMs_List_Group";
const DeviceDetailsURL="http://192.168.1.4:45455/VMss/VMs_Details?Id=";


export const DeviceActions={
    FILTER:"FILTER_VMS",
    SELECT:"SELECT_VMS",
    Reload:"Reload_VMS",
    FETCH_STARTED:"FETCH_STARTED",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    FETCH_FAILED:"FETCH_FAILED",
    FETCH_VMS_DETAILS_STARTED:"FETCH_VMS_DETAILS_STARTED",
    FETCH_VMS_DETAILS_SUCCESS:"FETCH_VMS_DETAILS_SUCCESS",
    FETCH_VMS_DETAILS_FAILED:"FETCH_VMS_DETAILS_FAILED"
}

export const FilterVMS = (filterText) => {
    return {type: DeviceActions.FILTER, filterText}
}

export const SelectVMS = (id) => {
    return (dispatch)=> {
       dispatch({ type: DeviceActions.FETCH_VMS_DETAILS_STARTED, id});
       fetch(DeviceDetailsURL+id,{})
       .then(res=>res.json(),
            err=>{alert(err); dispatch({type:DeviceActions.FETCH_FAILED,err})}
       ).then(
            data=> {
                dispatch({type:DeviceActions.FETCH_VMS_DETAILS_SUCCESS,data:data.VMS});
                dispatch({type:"PLAYLIST_CHANGE",data: data.PlayList,id})
        }
       );
    
}


}


export const FetchList=()=>{
    return (dispatch)=>{
        dispatch({type:DeviceActions.FETCH_STARTED});
        fetch(DeviceUrl,{
})
        .then(
            res=>res.json(),
            err=> {alert("failed"); dispatch({type:DeviceActions.FETCH_FAILED})}
        )
        .then(
            json=>dispatch({type:DeviceActions.FETCH_SUCCESS,data:json})
            );

    }
}