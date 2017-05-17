import React, {Component} from 'react';
import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import DeviceManager from './DeviceManager';
import Properties from './Properties'
import MessageWindow from './MessageWindow'
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";
//import jQuery from 'jquery'
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require('jquery');
require("bootstrap/dist/js/bootstrap");
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import {Button} from './UI';


class App extends Component {
  render() {
    return (
      <div className="App">

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
          </li>
         </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <Ribbon>
              <RibbonGroup title="Clipboard" colClass="col-xs-12">
                <RibbonGroupItem colClass="col-xs-2 col-sm-2 col-md-1 col-lg-1">
                  <RibbonButton>
                    <div className="ribbon-icon">
                        <Button onClick={this.callAction} text="Import" icon="fa-cloud-download"/>

                    </div>
                    <div>Pin</div>
                  </RibbonButton>
                </RibbonGroupItem>
                
              </RibbonGroup>

              

            </Ribbon>
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">...</div>
          <div role="tabpanel" className="tab-pane" id="messages">...</div>
          <div role="tabpanel" className="tab-pane" id="settings">...</div>
        </div>

        <div className="LeftSide">
          <DeviceManager/>
        </div>
        <div className="MainContainer">
          <MessageWindow/>

        </div>
        <div className="RightSide">
          <Properties
            properties={{
            name: "tetst",
            Temprature: "12"
          }}/>
        </div>
        <div className="StatusBar">status</div>
      </div>
    );
  }
}

export default App;
