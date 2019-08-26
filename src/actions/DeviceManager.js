///Device Manager
import {ServerCall} from '../api/Base';
const DeviceUrl = "VMss/VMs_List2";
const DeviceDetailsURL = "VMss/VMs_Details?Id=";
const GetStatusURL='Vmss/Vms_list2'

export const DeviceActions = {
    FILTER: "FILTER_VMS",
    SELECTED_VMS_Changed: "SELECTED_VMS_Changed",
    FETCH_VMS_DETAILS_STARTED: "FETCH_VMS_DETAILS_STARTED",
    FETCH_VMS_DETAILS_SUCCESS: "FETCH_VMS_DETAILS_SUCCESS",
    FETCH_VMS_DETAILS_FAILED: "FETCH_VMS_DETAILS_STARTED",

    Reload: "Reload_VMS",
    FETCH_STARTED: "FETCH_STARTED",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAILED: "FETCH_FAILED",

    FETCHED_STATUS:'FETCHED_STATUS'
   }

export const FilterVMS = (filterText) => {
    return {type: DeviceActions.FILTER, filterText}
}

export const SelectVMS = (id ,LastSent) => {
    return (dispatch) => {
        ServerCall(window.baseURL + DeviceDetailsURL + id +(LastSent? "&LastSent=true":""), {credentials: 'include'})
          .then( data => {
            dispatch({type: DeviceActions.FETCH_VMS_DETAILS_SUCCESS, data: data.VMS});
            if (!data.PlayList) 
                alert("برای دستگاه جاری هیچ لیست نمایشی انتخاب نشده است");
            
            dispatch({type: "PLAYLIST_CHANGE", data: data.PlayList, id});

            
                dispatch({
                    type: "RELOAD_PROPS",
                    data: JSON.parse(data.Properties || "[]")
                });
           
            if(!data.VMS.Online)
                alert("ارتباط با دستگاه برقرار نشد. اطلاعات بصورت آفلاین نشان داده میشوند.");
            
            dispatch(FetchList());


                setTimeout(function () {
                for (let p of document.getElementsByTagName("canvas")) 
                    if (p.fabric) 
                        p.fabric.renderAll();
                    }
                , 1000);


        });

    }

}

export const FetchList = () => {
    return (dispatch) => {
        ServerCall(window.baseURL + DeviceUrl, {credentials: 'include'})
          .then(json => dispatch({type: DeviceActions.FETCH_SUCCESS, data: json}));
    }
}

export const GetStatus=()=>{
    return (dispatch)=>{
        ServerCall(window.baseURL + GetStatusURL, {credentials: 'include'},true)
        .then(json => dispatch({type: DeviceActions.FETCHED_STATUS, data: json}));
    }
}