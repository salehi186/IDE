///Device Manager
import fetch from 'isomorphic-fetch'
<<<<<<< HEAD
const DeviceUrl= "VMss/VMs_List_Group";
const DeviceDetailsURL="VMss/VMs_Details?Id=";

=======
const DeviceUrl="http://192.168.70.141:45455/VMss/VMs_List_Group";
const DeviceDetailsUrl="http://192.168.70.141:45455/VMss/VMs_List_Group";
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8

export const DeviceActions={
    FILTER:"FILTER_VMS",
    SELECTED_VMS_Changed:"SELECTED_VMS_Changed",
    FETCH_VMS_DETAILS_STARTED:"FETCH_VMS_DETAILS_STARTED",
    FETCH_VMS_DETAILS_SUCCESS:"FETCH_VMS_DETAILS_STARTED",
    FETCH_VMS_DETAILS_FAILED:"FETCH_VMS_DETAILS_STARTED",
    
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
<<<<<<< HEAD
    return (dispatch)=> {
       dispatch({ type: DeviceActions.FETCH_VMS_DETAILS_STARTED, id});
       fetch(window.baseURL+DeviceDetailsURL+id,{})
       .then(res=>res.json(),
            err=>{alert(err); dispatch({type:DeviceActions.FETCH_FAILED,err})}
       ).then(
            data=> {
                dispatch({type:DeviceActions.FETCH_VMS_DETAILS_SUCCESS,data:data.VMS});
                dispatch({type:"PLAYLIST_CHANGE",data: data.PlayList,id})
        }
       );
    
}


=======
    return {type:DeviceActions.SELECTED_VMS_Changed,id}
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8
}




export const FetchList=()=>{
    return (dispatch)=>{
        dispatch({type:DeviceActions.FETCH_STARTED});
        fetch(window.baseURL+DeviceUrl,{
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