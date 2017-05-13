import React, {Component} from 'react';
import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import DeviceManager from './DeviceManager';
import Properties from './Properties'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ToolBar">ToolBar</div>
        <div className="LeftSide">
          <DeviceManager/>
        </div>
        <div className="MainContainer">Main</div>
        <div className="RightSide">

          <Properties properties={{name:"tetst", Temprature:"12"}}/>

        </div>
        <div className="StatusBar">status</div>
      </div>
    );
  }
}

export default App;
