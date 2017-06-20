///Device Manager
import fetch from 'isomorphic-fetch'
const DeviceUrl="http://192.168.70.141:45455/VMss/VMs_List_Group";

export const DeviceActions={
    FILTER:"FILTER_VMS",
    SELECT:"SELECT_VMS",
    Reload:"Reload_VMS",
    FETCH_STARTED:"FETCH_STARTED",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    FETCH_FAILED:"FETCH_FAILED"
}

export const FilterVMS = (filterText) => {
    return {type: DeviceActions.FILTER, filterText}
}

export const SelectVMS = (id) => {
    return {type: DeviceActions.SELECT, id}
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