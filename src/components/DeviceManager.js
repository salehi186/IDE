import React, {Component} from 'react';
import './DeviceManager.css'
//import {Button} from './UI';

export default class DeviceManager extends Component {
    constructor(props) {
        super(props);
        this._currentDevice = null;
        this.Devices = this.props.VMSList || [];
    }
    set CurrentDevice(value) {
        this._currentDevice = this.Devices[value];
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
            <div className="input-group">
                                <input type="text" className="form-control" placeholder="جست و جو" />
                                <span className="input-group-addon fa fa-search btn"></span>

                            </div>
            

            <ul>
                {this.Devices
                    .map((cat, i) => {
                        return <li key={"cat"+i}>
                            {cat.title}
                            <ul>
                                {cat
                                    .VMS
                                    .map((vms, idx) => {
                                        return <li
                                            key={"Device" + idx}
                                            onClick={this.props.onDeviceSelect
                                            .bind(this, i)}>
                                            <span className="title">{vms.name}</span>
                                            <span className={"icon fa " + (this.props.icon || " fa-television")}></span>

                                        </li>
                                    })}
                            </ul>
                        </li>

                    })}
            </ul>

        </div>;
    }

}