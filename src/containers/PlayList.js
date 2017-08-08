import {
    connect
} from 'react-redux';
import MessageWindow from '../components/MessageWindow';
import * as actions from '../actions'

// Listen to message from child window
window.addEventListener ("message",function(e) {
  console.log('parent received message!:  ',e.data);
  switch(e.data.type){
    case "Image":
        window.store.dispatch(actions.ImportImage(e.data.ImageID,e.data.ImageContent))

    break;

    default:

  }

},false);


const mapStateToProps = (state) => {
   
    return {
        playList: state.CurrentVMS.Playlist,
        currentConvas: state.CurrentVMS.Playlist.ActiveItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Edit:(id, fbc)=>{
            dispatch(actions.ChangeActiveItem(id,fbc));
        },
        Save:(id,fbc)=>{

        },
        SwapItems:(id,TargetId,currentImage,nextImage)=>{
            dispatch(actions.SwapItems(id,TargetId,currentImage,nextImage));
        },
        DeleteItem:(id)=>{
            dispatch(actions.DeletePlayListItem(id));
        },
        AddItem:()=>{
            dispatch(actions.ChangeActiveItem(-1));
            let act=actions.AddPlayListItem();
            dispatch(act);
            //dispatch(actions.ChangeActiveItem(act.data.PlayListTemplateItemID))
        }


    };
}

const PlayList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageWindow)

export default PlayList;