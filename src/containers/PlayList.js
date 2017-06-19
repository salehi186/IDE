import {
    connect
} from 'react-redux';
import MessageWindow from '../components/MessageWindow';
import * as actions from '../actions'




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
        SwapItems:(id,TargetId)=>{
            dispatch(actions.SwapItems(id,TargetId));
        }

    };
}

const PlayList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageWindow)

export default PlayList;