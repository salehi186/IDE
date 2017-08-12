import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './store';
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require('jquery');
require("bootstrap/dist/js/bootstrap");
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "bootstrap-rtl/dist/css/bootstrap-rtl.css"
import './App.css';
//import DeviceManager from './components/DeviceManager';
import VisibleVMSList from './containers/VMSList'
import PropertyList from './containers/PropertyList'
import PlayList from './containers/PlayList'
import MenuContainer from './containers/MenuContainer';

window.baseURL="http://192.168.56.101:45455/"




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
          <div className="StatusBar">status</div>

        </div>

      </Provider>
    );
  }
}

export default App;
