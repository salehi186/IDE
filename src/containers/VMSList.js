import {connect} from 'react-redux';
import DeviceManager from '../components/DeviceManager';
import * as actions from '../actions'


const mapStateToProps = (state) => {
  return {
    SelectedVMS:state.VMSGroups.ActiveVMS,
    FilterText:state.VMSGroups.filterExpr,
    VMSList:  state.VMSGroups.List //FilterVMSList(state.VMSGroups.List, state.VMSGroups.filterExpr)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeviceSelect: (id) => {
      dispatch(actions.DeviceManager.SelectVMS(id,true));
    },
    doFilter:(filterExpr)=>{
      dispatch(actions.DeviceManager.FilterVMS(filterExpr));
    },
    getVmsListState:()=>{
      dispatch(actions.DeviceManager.GetStatus());
    }

  }
}

const VMSList = connect(mapStateToProps, mapDispatchToProps)(DeviceManager)

export default VMSList
