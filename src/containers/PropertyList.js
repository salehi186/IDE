import {connect} from 'react-redux';
import properties from '../components/Properties';
import * as actions from '../actions'
import {ServerCall} from '../api/Base';

const mapStateToProps = (state) => {
  return {propsList: state.CurrentVMS.VMSProps}
}

const mapDispatchToProps = (dispatch) => {
  return {
    SaveProperties: () => {
      let props = window
          .store
          .getState()
          .CurrentVMS
          .VMSProps;
      let VMSID = window
          .store
          .getState()
          .VMSGroups
          .ActiveVMS;
      if (!props) {
          alert("هنوز هیچ دستگاهی انتخاب نشده است");
          return;
      }

      let data = new FormData();
      data.append("props", JSON.stringify(props));
      data.append("vmsid", VMSID);

      ServerCall(window.baseURL + "/VMss/Vms_SetProperties", {
          // 'mode': 'no-cors',
          method: "POST",
          credentials: 'include',
          header: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
          },
          body: data
      })
      // .then(res => {
      //     return res.json()
      // }, err => alert(err))
      
      .then(json => {
          alert("تنظیمات با موفقیت به دستگاه ارسال گردید.");
          dispatch(actions.PropsSaved());
      });
  },

    SetProperty:(name,value )=> dispatch(actions.SetPropValue(name,value))

  };
}

const PropertyList = connect(mapStateToProps, mapDispatchToProps)(properties)

export default PropertyList;