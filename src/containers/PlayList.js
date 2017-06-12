import {
    connect
} from 'react-redux';
import MessageWindow from '../components/MessageWindow';
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        playList: state.CurrentVMS.Playlist,
        currentConvas: state.CurrentVMS.Playlist.activeItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Edit:(id, fbc)=>{
            console.log(id,fbc);
            dispatch(actions.ChangeActiveItem(id,fbc));
        },
        Save:(id,fbc)=>{
            console.log(id,fbc);

        }
        

    };
}

const PlayList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageWindow)

export default PlayList;