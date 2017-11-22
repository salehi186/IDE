///Device Manager
import {ServerCall} from '../api/Base';
const DeviceUrl = "VMss/VMs_List";
const DeviceDetailsURL = "VMss/VMs_Details?Id=";

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
    // FETCH_VMS_DETAILS_STARTED:"FETCH_VMS_DETAILS_STARTED",
    // FETCH_VMS_DETAILS_SUCCESS:"FETCH_VMS_DETAILS_SUCCESS",
    // FETCH_VMS_DETAILS_FAILED:"FETCH_VMS_DETAILS_FAILED"
}

export const FilterVMS = (filterText) => {
    return {type: DeviceActions.FILTER, filterText}
}

export const SelectVMS = (id) => {
    return (dispatch) => {
        ServerCall(window.baseURL + DeviceDetailsURL + id, {credentials: 'include'})
          .then( data => {
            dispatch({type: DeviceActions.FETCH_VMS_DETAILS_SUCCESS, data: data.VMS});
            if (!data.PlayList) 
                alert("برای دستگاه جاری هیچ لیست نمایشی انتخاب نشده است");
            
            dispatch({type: "PLAYLIST_CHANGE", data: data.PlayList, id});

            if (data.Properties) 
                dispatch({
                    type: "RELOAD_PROPS",
                    data: JSON.parse(data.Properties || "[]")
                });
            else 
                alert("ارتباط با دستگاه برقرار نشد.  مشخصات دستگاه بارگزاری نشد.");
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