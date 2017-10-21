import {connect} from 'react-redux';
import MessageWindow from '../components/MessageWindow';
import * as actions from '../actions'

// Listen to message from child window
window.addEventListener("message", function (e) {
    //console.log('parent received message!:  ', e.data);
   
    switch (e.data.type) {
        case "Image":
            let dispatch = window.store.dispatch;
            if (window.store.getState().CurrentVMS.Playlist.ActiveItem === -1) {
                let act = actions.AddPlayListItem();
                act.data.ImageContent=e.data.data.ImageContent;
                act.data.ImageID=e.data.data.ImageID;
                act.data.ImageName=e.data.data.ImageName;
                dispatch(act);
            } else {
                global
                    .jQuery(".modal")
                    .modal('hide');
                dispatch(actions.ImportPlayListItem(e.data.data));
            }
            break;
        case "PlayList":
            global
                .jQuery(".modal")
                .modal('hide');
            window
                .store
                .dispatch(actions.DeviceManager.SelectVMS(e.data.data.VMSRef));
            break;

        default:

    }

}, false);

const mapStateToProps = (state) => {

    return {playList: state.CurrentVMS.Playlist, currentConvas: state.CurrentVMS.Playlist?state.CurrentVMS.Playlist.ActiveItem:-1}
}

const mapDispatchToProps = (dispatch) => {
    return {
        Edit: (id, fbc) => {
            dispatch(actions.ChangeActiveItem(id, fbc));
        },
        Save: (itm) => {
            dispatch(actions.UpdatePlayListItem(itm));
        },
        SwapItems: (id, TargetId, currentImage, nextImage) => {
            dispatch(actions.SwapItems(id, TargetId, currentImage, nextImage));
        },
        DeleteItem: (id) => {
            dispatch(actions.DeletePlayListItem(id));
        },
        AddItem: () => {
            dispatch(actions.ChangeActiveItem(-1));
            let act = actions.AddPlayListItem();
            dispatch(act);
            //dispatch(actions.ChangeActiveItem(act.data.PlayListTemplateItemID))
        }

    };
}

const PlayList = connect(mapStateToProps, mapDispatchToProps)(MessageWindow)

export default PlayList;
