import React, {Component} from 'react'
import {Button} from './UI'
import './Properties.css'
export default class Properties extends Component {

    status = {
        properties: {
            Name: "",
            ip: "172.17.8.13",
            temprature: "12",
            userName: "name",
            password: "dfsf"

        }
    }
    render() {
        return <div className="properties">
            <span>Properties
            </span>

            <ul>
                {Object
                    .keys(this.props.Actions)
                    .map((p, idx) => {
                        return <li key={"prop" + idx}>
                            <label>{p}</label>
                            <input type="text" name={p} value={this.props.Actions[p]}/>
                            <Button onClick={this.callAction} text="Send Picture" icon="fa-send"/>
                        </li>;
                    })}
                <li>
                    Submit All Properties
                    <Button onClick={this.callAction} text="Send Picture" icon="fa-send"/>
                </li>

            </ul>

        </div>;
    }

}
