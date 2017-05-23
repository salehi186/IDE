import React, {Component} from 'react';
import {Button} from './UI';
import './Messagewindow.css'

export default class MessageWindow extends Component {

    callAction(action) {}

    render() {
        return <div className="MessageWindow">
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
