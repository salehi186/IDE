import React, {Component} from 'react';
import {Button} from './UI';
import './Messagewindow.css'

export default class MessageWindow extends Component {

    callAction(action) {}

    render() {
        return <div className="MessageWindow">

            <div className="toolbar">
                <Button onClick={this.callAction} text="Import" icon="fa-cloud-download"/>
                <Button onClick={this.callAction} text="Add" icon="fa-image"/>
                <Button onClick={this.callAction} text="Delete" icon=" fa-trash"/>
                <Button onClick={this.callAction} text="Move Left" icon=" fa-mail-reply"/>
                <Button onClick={this.callAction} text="Move Right" icon="fa-mail-forward"/>
                <Button onClick={this.callAction} text="Send Picture" icon="fa-send"/>
            </div>
            <div className="deviceInformation">
                <br/>
                Khayam VMS222
                <br/>
                ON
                <br/>
                Every thing is ok
            </div>
            <br/>

            <div className="imageContainer">
                <img src="/images/1.bmp" alt="this is a test"/>
                <img src="/images/8.bmp" alt="this is a test"/>
                <img src="/images/16.bmp" alt="this is a test"/>

            </div>

        </div>;

    }

}
