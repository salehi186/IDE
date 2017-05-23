import React, {Component} from 'react';
import './DeviceManager.css'
//import {Button} from './UI';

export default class DeviceManager extends Component {
    constructor(props) {
        super(props);
        this._currentDevice = null;
        this.state = {
            Devices: [
                {
                    title: "test",
                    VMS: [
                        {
                            name: "Shahid ghandi",
                            id: "123"
                        }, {
                            name: "Kave",
                            id: "124"
                        }
                    ]
                }, {
                    title: "large",
                    VMS: [
                        {
                            name: "nikbakht",
                            id: "122"
                        }, {
                            name: "ferdosi",
                            id: "121"
                        }
                    ]
                }
            ]
        }
    }
    set CurrentDevice(value) {
        this._currentDevice = this.state.Devices[value];
    }
    get CurrentDevice() {
        return this._currentDevice
    }

    refreshDeviceList() {
        alert(this.state.CurrentDevice);

    }

    DeviceChange(idx) {
        this.CurrentDevice = idx;
        alert(this.CurrentDevice);
    }

    render() {

        return <div className="DeviceManager">
            <div className="searchBar">
                <input type="text" placeholder="Search"/>
                <span className="fa fa-search"></span>
            </div>

            <ul>
                {this
                    .state
                    .Devices
                    .map((cat, i) => {
                        return <li key={"cat"+i}>
                            {cat.title}
                            <ul>
                                {cat
                                    .VMS
                                    .map((vms, idx) => {
                                        return <li
                                            key={"Device" + idx}
                                            onClick={this
                                            .DeviceChange
                                            .bind(this, i)}>
                                            <span className="title">{vms.name}</span>
                                            <span className={"icon fa " + (this.props.icon || " fa-television")}></span>

                                        </li>
                                    })
}
                            </ul>
                        </li>

                    })
}
            </ul>

        </div>;
    }

}