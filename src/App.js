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
          <h4 className="modal-title" id="myModalLabel">
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
            height="600px"
            className="modal-lg"
            onLoad={() => {
              let contenDocument=document.getElementsByTagName("iframe")[0].contentDocument;
            document
              .getElementById("modalLoading")
              .style
              .display = "none";
            document
              .getElementById("modalDialog")
              .style
              .display = "block";
              document.getElementById("myModalLabel").innerHTML=contenDocument ? contenDocument.title :"";
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
        <div>
         <Dialog/>
          <div className="App">
           

            <MenuContainer/>
            <div className="ContentHolder">
              <div className="SideBar right FixedContent" ref="rightPanel">
                <button className="AutoHide" value="sadas" onClick={()=>{
                  this.refs.rightPanel.style.right=this.refs.rightPanel.style.right=="-180px"?"0px":"-180px";
                }
                  } />
                <VisibleVMSList/>
              </div>
              <div className="MainContainer FixedContent">
                <PlayList/>
              </div>

              <div className="SideBar left FixedContent" ref="leftPanel">
                  <button className="AutoHide" value="sadas" onClick={()=>{
                      this.refs.leftPanel.style.left=this.refs.leftPanel.style.left=="-180px"?"0px":"-180px";
                    }
                  } />

                <PropertyList/>
              </div>

            </div>
            {/* <div className="StatusBar">

              <div className="loader"></div>

            </div> */}

          </div>
          <div id="modalServerLoading" className="preloader">
            <img
              src="loading.gif"
              alt="Please Wait"
              style={{
              width: 300
            }}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
