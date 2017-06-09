import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
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
import {Menu} from './components/Menu'

import IDE_REDUX from './reducers'


let store = createStore(IDE_REDUX)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Menu/>
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
