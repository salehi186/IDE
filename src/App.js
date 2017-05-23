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

const MenuItem = (props) => {
  return <RibbonGroupItem colClass="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    <RibbonButton>
      <div className="ribbon-icon">
        <Button onClick={props.click} text={props.text} icon={props.icon}/>
      </div>
      <div>{props.text}
      </div>
    </RibbonButton>
  </RibbonGroupItem>

}

class App extends Component {
  render() {
    return (
      <div className="App">

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Forms</a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <Ribbon>
              <div
                style={{
                whiteSpace: "wrap",
                width: "100%"
              }}>

                <RibbonGroup title="مدیریت تابلو ها" colClass="col-xs-6">
                  <MenuItem text="refresh" icon="fa-refresh"/>
                  <MenuItem text="check" icon="fa-plug"/>
                </RibbonGroup>

                <RibbonGroup title="مدیریت تابلو ها" colClass="col-xs-6">

                  <MenuItem text="Import" icon="fa-cloud-download"/>
                  <MenuItem text="Add" icon="fa-image"/>
                  <MenuItem text="Delete" icon=" fa-trash"/>
                  <MenuItem text="Move Left" icon=" fa-mail-reply"/>
                  <MenuItem text="Move Right" icon="fa-mail-forward"/>
                  <MenuItem text="Send Picture" icon="fa-send"/>

                </RibbonGroup>

              </div>
            </Ribbon>
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">
            <Ribbon>
              <div
                style={{
                whiteSpace: "wrap",
                width: "100%"
              }}>
                <RibbonGroup title="اطلاعات پایه" colClass="col-xs-12">
                  <MenuItem text="PlayList" icon="fa-book"/>
                  <MenuItem text="Devices" icon="fa-book"/>
                  <MenuItem text="Rules" icon="fa-book"/>
                </RibbonGroup>
              
              </div>
              </Ribbon>

          </div>
          
        </div>
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
    );
  }
}

export default App;
