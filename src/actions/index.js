import * as _deviceManager from '../actions/DeviceManager';

export const DeviceManager = _deviceManager;

export const RootActions = {
    LOAD_DATA_FROM_SERVER: "LOAD_DATA_FROM_SERVER",
    LOAD_DATA_STARTED: "LOAD_DATA_STARTED",
    LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
    LOAD_DATA_FAILED: "LOAD_DATA_FAILED"
}

export const LoadFromServer = () => {
    return (dispatch) => {
        fetch("", {}).then(res => res.json(), err => {
            alert(err);
            dispatch({type: RootActions.LOAD_DATA_FAILED, err});
        }).then(json => dispatch({type: RootActions.LOAD_DATA_SUCCESS, data: json}))
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
    ///افزودن یا تغییر در عکس جاری
    INSERT_OBJECT: "INSERT_OBJECT",
    /// افزودن یک آیتم جدید
    ADD_PLAYLIST_ITEM: "ADD_PLAYLIST_ITEM",
    ///تغییر یک لیست آیتم
    IMPORT_PLAYLIST_ITEM: "IMPORT_PLAYLIST_ITEM",
    ///حذف یک آیتم
    DELETE_PLAYLIST_ITEM: "DELETE_PLAYLIST_ITEM",
    ///ذخیره اطلاعات پلی لیست در سرور
    SAVE_PLAYLIST: "SAVE_PLAYLIST",
    ///انتخاب یک آیتم جهت ویرایش
    CHANGE_ACTIVE_ITEM: "CHANGE_ACTIVE_ITEM",
    ///جابه جا کردن یک عکس با عکس بالایی یا پایینی
    SWAP_IMAGE: "SWAP_IMAGE",
    ///تغییر زمان نمایش یک آیتم
    CHANGE_ITEM_DELAY: "CHANGE_ITEM_DELAY",
    ///زمانی که یک دستگاه جدید انتخاب میشه یا پلی لیست جدیدی انتخاب میشود
    PLAYLIST_CHANGE: "PLAYLIST_CHANGE"

}

///Message Window
export const SwapItems = (id, TargetId, currentImage, nextImage) => {
    return {type: PlayListActions.SWAP_IMAGE, id, TargetId, currentImage, nextImage}
}

var newImageId = -10;
export const AddPlayListItem = () => {
    return {
        type: PlayListActions.ADD_PLAYLIST_ITEM,
        data: {
            PlayListTemplateItemID: --newImageId,
            ImageContent: '{"objects":[],"background":"rgba(0, 0, 0, 0)"}',
            Delay: 20,
            ImageID: -1,

            // width: p.Width, height: p.Height,
            ImageName: "NoTitle",
            isChanged: false,
            order: newImageId
        }

    }
}

export const ImportPlayListItem = (data) => {
       return{
            type: PlayListActions.IMPORT_PLAYLIST_ITEM,
            data: {
                PlayListTemplateItemID: --newImageId,
                ImageContent: data.ImageContent,
                Delay: 20,
                ImageID: data.ImageID,

                // width: p.Width, height: p.Height,
                ImageName: data.ImageName,
                isChanged: false,
                order: newImageId
            }
        };
}

export const DeletePlayListItem = (id) => {
    return {type: PlayListActions.DELETE_PLAYLIST_ITEM, id}
}

export const SavePlayList = (id) => {
    return {type: PlayListActions.SAVE_PLAYLIST, id}

}
export const ChangeActiveItem = (id, canvas) => {
    return {type: PlayListActions.CHANGE_ACTIVE_ITEM, Id: id, Canvas: canvas};
}

export const InsertObject = (ObjectType, defaultProps) => {
    return {type: PlayListActions.INSERT_OBJECT, shape: ObjectType, defaults: defaultProps}
}

export const CanvasActions = {
    ChangeCurrentCanvas: "ChangeCurrentCanvas",
    ADD_IMAGE: "INSERTIMAGE",
    ADD_TEXT: "ADD_TEXT",
    ADD_CIRCLE: "ADD_CIRCLE",
    ADD_RECTANGLE: "ADD_RECTANGLE",
    SET_BACK_COLOR: "SET_BACK_COLOR",
    SET_FORE_COLOR: "SET_FORE_COLOR",
    FREE_DRAW: "FREE_DRAW",
    ADD_SYMBOLE: "ADD_SYMBOLE"
}
