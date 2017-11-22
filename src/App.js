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

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
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
            id="modalLoading"
            class="progress-bar progress-bar-striped active">
            <span>در حال ارتباط با سرور ...</span>
          </div>

        </div>

      </Provider>
    );
  }
}

export default App;
