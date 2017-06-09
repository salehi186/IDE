import { connect } from 'react-redux';
import MessageWindow  from '../components/MessageWindow';
import * as actions from '../actions'



const mapStateToProps = (state) => {
return { playList: state.CurrentVMS.Playlist}
}

const mapDispatchToProps = (dispatch) => {
return {

    };
}

const PlayList =connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageWindow)

export default PlayList;