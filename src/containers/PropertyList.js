import { connect } from 'react-redux';
import properties  from '../components/Properties';
import * as actions from '../actions'



const mapStateToProps = (state) => {
return { propsList: state.CurrentVMS.VMSProps}
}

const mapDispatchToProps = (dispatch) => {
return {
    };
}

const PropertyList =connect(
  mapStateToProps,
  mapDispatchToProps
)(properties)

export default PropertyList;