import React, {Component} from 'react';
import './DeviceManager.css'
//import {Button} from './UI';

export default class DeviceManager extends Component {
    constructor(props) {
        super(props);
        this._currentDevice = null;

    }
    componentDidMount(){
        this.props.getVmsListState();
       setInterval(() => {
        this.props.getVmsListState();
       }, 60000); 
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

            <ul className="list-group">
                {this
                    .props
                    .VMSList
                    .map((cat, i) => {
                        return <li key={"cat" + i} className="list-group-item vmsgroup">
                            <a>
                                {cat.Name}</a>
                            <ul>
                                {(cat.VMSList || []).map((vms, idx) => {
                                    if (!this.props.FilterText || vms.Name.indexOf(this.props.FilterText, 0) !== -1) 
                                        return <Device
                                            Selected={this.props.SelectedVMS === vms.Id}
                                            key={"vmss_" + idx}
                                            onDeviceSelect={this.props.onDeviceSelect}
                                            icon={this.props.icon}
                                            {...vms}
                                            />
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
    return <li
        data-id={props.Id}
        className={"list-group-item" + (props.Selected
        ? " Selected"
        : "")}
        onClick={() => props.Enable ? props.onDeviceSelect(props.Id): console.log(props)}>
        <span className="title">{props.Name}</span>
        <span className={"icon fa " + (props.icon || " fa-television")}></span>
        <span
            className={"icon fa fa-plug"}
            style={{
            color: props.Color || 'gray'
        }}></span>

    </li>
}