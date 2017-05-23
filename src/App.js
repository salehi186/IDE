import React, {Component} from 'react';
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

const MenuItem = (props) => {
  return <button type="button" className="btn btn-default btn-lg" onClick={props.click}>
    <span className={"fa " + props.icon} aria-hidden="true"></span>
    <p style={{
      fontSize: "small"
    }}>
      {props.text}
    </p>
  </button>

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
          <li role="presentation">
            <a href="#imageEdit" aria-controls="imageEdit" role="tab" data-toggle="tab">ویرایش عکس</a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <MenuItem text="refresh" icon="fa-refresh"/>
            <MenuItem text="check" icon="fa-plug"/>
            <MenuItem text="Import" icon="fa-cloud-download"/>
            <MenuItem text="Add" icon="fa-image"/>
            <MenuItem text="Delete" icon=" fa-trash"/>
            <MenuItem text="Move Left" icon=" fa-mail-reply"/>
            <MenuItem text="Move Right" icon="fa-mail-forward"/>
            <MenuItem text="Send Picture" icon="fa-send"/>
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">
            <MenuItem text="PlayList" icon="fa-book"/>
            <MenuItem text="Devices" icon="fa-book"/>
            <MenuItem text="Rules" icon="fa-book"/>
          </div>
          <div role="tabpanel" className="tab-pane row" id="imageEdit">

            <div className=" col-xs-1">
              <div className="input-group">
                <input type="color" className="form-control"/>
                <span className="input-group-addon fa fa-pencil"></span>

              </div>
            </div>
            <div className=" col-xs-1">

              <div className="input-group">
                <span className="input-group-addon fa fa-pencil-square"></span>
                <input type="color" className="form-control" defaultValue="#ffffff"/>
              </div>
            </div>
            <div className="col-xs-6">
              <MenuItem text="PlayList" icon="fa-book"/>
              <MenuItem text="Devices" icon="fa-book"/>
              <MenuItem text="Rules" icon="fa-book"/>
            </div>

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
