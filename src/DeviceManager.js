import React, {Component} from 'react';
import './DeviceManager.css'
import {Button} from './UI';


export default class DeviceManager extends Component{
constructor(props){
   super(props); 
    this._currentDevice=null;
this.state={    
    Devices:[
        {name:"Shahid ghandi", ip:"192.168.64.12",category:"" }
        ,{name:"Kave", ip:"12.15.124.13",category:"" }
        ,{name:"Emam Hosein", ip:"125.254.244.123",category:"" }
        ,{name:"Falahati", ip:"172.254.244.22",category:"" }
    ]}
}
set CurrentDevice(value){ this._currentDevice=this.state.Devices[ value];}
get  CurrentDevice(){return this._currentDevice}

refreshDeviceList(){
    alert(this.state.CurrentDevice);

}

DeviceChange(idx){
    this.CurrentDevice=idx;
    alert(this.CurrentDevice);
}

render(){

    return <div className="DeviceManager">
        <div className="toolbar" >
            
            <Button onClick={this.refreshDeviceList}   text="refresh" icon="fa-refresh" />
            <Button onClick={this.refreshDeviceList}   text="refresh" icon="fa-plug" />
            <Button onClick={this.refreshDeviceList}   text="refresh" icon="fa-close" />
            <Button onClick={this.refreshDeviceList}   text="refresh" icon="fa-bar-chart" />
            <Button onClick={this.refreshDeviceList}   text="refresh" icon="fa-search" />

       </div>
       <ul>
       {
           
           this.state.Devices.map((d,i)=> 
           <li key={"Device"+ i} onClick={this.DeviceChange.bind(this,i)} > 
               <span className="title" >{d.name}</span> 
               <span className={"icon fa "+ (this.props.icon||" fa-television")  } ></span> 
           </li>
           )

       }
       </ul>

        </div>;
}

}