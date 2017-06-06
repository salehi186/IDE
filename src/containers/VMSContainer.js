import { connect } from 'react-redux';
import DeviceManager from '../components/DeviceManager';
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return { VMSList: state.VMSGroups}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeviceSelect: (id) => {
      dispatch(actions.SelectVMS(id));
    }
  }
}

const VMSList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceManager)

export default VMSList
