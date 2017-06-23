import * as _deviceManager from '../actions/DeviceManager';

export const DeviceManager=_deviceManager;

export const RootActions={
    LOAD_DATA_FROM_SERVER:"LOAD_DATA_FROM_SERVER",
    LOAD_DATA_STARTED:"LOAD_DATA_STARTED",
    LOAD_DATA_SUCCESS:"LOAD_DATA_SUCCESS",
    LOAD_DATA_FAILED:"LOAD_DATA_FAILED"
}

export const LoadFromServer=( )=>{
    return (dispatch)=>{
        fetch("",{})
        .then(
            res=>res.json(),
            err=>{alert(err); dispatch({type:RootActions.LOAD_DATA_FAILED,err});}
        )
        .then(json=> dispatch({type:RootActions.LOAD_DATA_SUCCESS,data:json}))
    }
}


///Properties Component
export const PropertiesActions = {
    SET_PROPS: "SET_PROPS",
    SET_All: "SET_All",
    RELOAD_PROPS: "RELOAD_PROPS"
}
export const SetPropValue = (id, value) => {
    return {type: PropertiesActions.SET_PROPS, id: id, value}
}

export const SetAllProps = (propList) => {
    return {type: PropertiesActions.SET_All, props: propList}
}

export const ReloadProps = () => {
    return {type: PropertiesActions.RELOAD_PROPS}
}



export const PlayListActions = {
    INSERT_OBJECT:"INSERT_OBJECT",
    ADD_IMAGE: "ADD_IMAGE",
    IMPORT_IMAGE: "IMPORT_IMAGE",
    DELETE_IMAGE: "DELETE_IMAGE",
    SAVE_IMAGE: "SAVE_IMAGE",
    SAVE_PLAYLIST: "SAVE_PLAYLIST",
    CHANGE_ACTIVE_ITEM:"CHANGE_ACTIVE_ITEM",
    SWAP_IMAGE:"SWAP_IMAGE",
    CHANGE_ITEM_DELAY:"CHANGE_ITEM_DELAY",
    PLAYLIST_CHANGE:"PLAYLIST_CHANGE"

}

///Message Window

export const SwapItems=(id,TargetId,currentImage,nextImage)=>{
    return {
        type:PlayListActions.SWAP_IMAGE,
        id,TargetId,currentImage,nextImage
    }

}
var newImageId = -1;
export const AddImage = () => {
    return {
        type: PlayListActions.AddImage,
        id: (--newImageId)
    }
}

export const ImportImage = (id, image) => {
    return {type: PlayListActions.IMPORT_IMAGE, id, image, delay: 20}
}

export const DeleteImage = (id) => {
    return {type: PlayListActions.DELETE_IMAGE, id}
}
export const SaveImage = (id) => {
    return {type: PlayListActions.SAVE_IMAGE, id}
}
export const SavePlayList = (id) => {
    return {type: PlayListActions.SAVE_PLAYLIST, id}

}
export const ChangeActiveItem=(id,canvas)=>{
    return {type:PlayListActions.CHANGE_ACTIVE_ITEM,Id:id,Canvas: canvas};
}

export const InsertObject=(ObjectType,defaultProps)=>{
        return{
            type:PlayListActions.INSERT_OBJECT,
            shape:ObjectType,
            defaults:defaultProps
        }
}


export const CanvasActions = {
    ChangeCurrentCanvas:"ChangeCurrentCanvas",
    ADD_IMAGE: "INSERTIMAGE",
    ADD_TEXT: "ADD_TEXT",
    ADD_CIRCLE: "ADD_CIRCLE",
    ADD_RECTANGLE: "ADD_RECTANGLE",
    SET_BACK_COLOR: "SET_BACK_COLOR",
    SET_FORE_COLOR: "SET_FORE_COLOR",
    FREE_DRAW: "FREE_DRAW",
    ADD_SYMBOLE: "ADD_SYMBOLE"
}
