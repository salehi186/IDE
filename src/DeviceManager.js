import React, {Component} from 'react';
import './DeviceManager.css'

export default class DeviceManager extends Component{
constructor(props){
   super(props); 
this.state={
    Devices:[
        {name:"Shahid ghandi", ip:"192.168.64.12",category:"" }
        ,{name:"Kave", ip:"12.15.124.13",category:"" }
        ,{name:"Emam Hosein", ip:"125.254.244.123",category:"" }
        ,{name:"Falahati", ip:"172.254.244.22",category:"" }

    ]

}



}


render(){

    return <div className="DeviceManager">
       <ul>
       {
           
           this.state.Devices.map((d,i)=> 
           <li key={"Device"+ i}> 
               <span className="title" >{d.name}</span> 
               <span className={"icon fa "+ (this.props.icon||" fa-television")  } ></span> 
           </li>
           )

       }
       </ul>

        </div>;
}

}