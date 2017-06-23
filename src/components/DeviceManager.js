import React, {Component} from 'react';
import './DeviceManager.css'
//import {Button} from './UI';

export default class DeviceManager extends Component {
    constructor(props) {
        super(props);
        this._currentDevice = null;

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
                <input
                    type="text"
                    className="form-control"
                    ref="filterInput"
                    placeholder="جست و جو"/>
                <span
                    className="input-group-addon fa fa-search btn"
                    onClick={() => this.props.doFilter(this.refs.filterInput.value.trim())}></span>

            </div>

            <ul>
                {this
                    .props
                    .VMSList
                    .map((cat, i) => {
                        return <li key={"cat" + i}>
                            {cat.Name}
                            <ul>
                                {cat
                                    .VMSList
                                    .map((vms, idx) => {
                                        if (!this.props.FilterText || vms.Name.indexOf(this.props.FilterText, 0) !== -1) 
                                            return <Device
                                                key={"vmss_" + idx}
                                                id={vms.Id}
                                                onDeviceSelect={this.props.onDeviceSelect}
                                                icon={this.props.icon}
                                                name={vms.Name}/>
                                        return ""
                                    })}
                            </ul>
                        </li>

                    })}
            </ul>

        </div>;
    }

}

const Device = (props) => {
    return <li data-id={props.id} onClick={() => props.onDeviceSelect(props.id)}>
        <span className="title">{props.name}</span>
        <span className={"icon fa " + (props.icon || " fa-television")}></span>

    </li>
}