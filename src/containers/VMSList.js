import {connect} from 'react-redux';
import DeviceManager from '../components/DeviceManager';
import * as actions from '../actions'

function FilterVMSList(list, filter) {
  if (!filter) 
    return list;
  else 
    return list.map(p=>{  })
  }

const mapStateToProps = (state) => {
  return {
    FilterText:state.VMSGroups.filterExpr,
    VMSList:  state.VMSGroups.List //FilterVMSList(state.VMSGroups.List, state.VMSGroups.filterExpr)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeviceSelect: (id) => {
      dispatch(actions.sss.SelectVMS(id));
    },
    doFilter:(filterExpr)=>{
      dispatch(actions.sss.FilterVMS(filterExpr));
    }
  }
}

const VMSList = connect(mapStateToProps, mapDispatchToProps)(DeviceManager)

export default VMSList
