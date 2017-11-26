import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "bootstrap-rtl/dist/css/bootstrap-rtl.css"

import MenuContainer from './containers/MenuContainer';
import PropertyList from './containers/PropertyList'
import PlayList from './containers/PlayList'
import {Provider} from 'react-redux'
import React, {Component} from 'react';
import store from './store';
import VisibleVMSList from './containers/VMSList'
//import DeviceManager from './components/DeviceManager';

global.jQuery = require('jquery');
global.baseURL = window.baseURL = window
  .location
  .host
  .indexOf("local") > -1
  ? "http://127.0.0.1:45455/"
  : "";
require("bootstrap/dist/js/bootstrap");


const Dialog = (props) => {
  return <div
    className="modal fade"
    id="testModal"
    role="dialog"
    aria-labelledby="myModalLabel">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">مدیریت
          </h4>
        </div>
        <div className="modal-body" style={{
          padding: 0
        }}>
          <img id="modalLoading" alt="loading" src="/loading.gif"/>
          <iframe
            title="modal dialog"
            name="modalDialog"
            id="modalDialog"
            width="700px"
            height="700px"
            className="modal-lg"
            onLoad={() => {
            document.getElementById("modalLoading").style.display="none";
            document.getElementById("modalDialog").style.display="block";
          }}></iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">بازگشت</button>
          {(props.save)
            ? <button type="button" className="btn btn-primary">Save changes</button>
            : ""}
        </div>
      </div>
    </div>
  </div>

}


class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
        <Dialog/>

          <MenuContainer/>
          <div className="ContentHolder">
            <div className="MainContainer">
              <PlayList/>
            </div>
            <div className="SideBar right">
              <VisibleVMSList/>
            </div>
            <div className="SideBar left">
              <PropertyList/>
            </div>

          </div>
          <div className="StatusBar">

            <div className="loader"></div>

          </div>
          <div
            id="modalServerLoading"
            className="progress-bar progress-bar-striped active">
            <span>در حال ارتباط با سرور ...</span>
          </div>

        </div>

      </Provider>
    );
  }
}

export default App;
