import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import DeviceManager from './DeviceManager';
import Properties from './Properties'
import MessageWindow from './MessageWindow'
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require('jquery');
require("bootstrap/dist/js/bootstrap");
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "bootstrap-rtl/dist/css/bootstrap-rtl.css"
import {Menu} from './Menu'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Menu/>
          <div className="ContentHolder">
            <div className="MainContainer">
              <MessageWindow/>
            </div>
            <div className="SideBar right">
              <DeviceManager/>
            </div>
            <div className="SideBar left">
              <Properties
                Actions={{
                name: "tetst",
                Temprature: "12"
              }}/>
            </div>

          </div>
          <div className="StatusBar">status</div>
        </div>
      </Provider>
    );
  }
}

export default App;
