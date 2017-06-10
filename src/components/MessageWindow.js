import React, {Component} from 'react';
import {fabric} from 'fabric/dist/fabric';
import './Messagewindow.css';

export default class MessageWindow extends Component {

    constructor(props) {
        super();
        this.state = {
            currentConvas: 123,
        }
    }

    callAction(action) {}
    componentDidMount() {
        let convasList =this.convasList= {};
        this.props.playList
            .items
            .forEach((p, idx) => {
                let c = this.convasList[p.id]|| (document.getElementById(p.id).fabric= new fabric.Canvas(document.getElementById(p.id)));
                c.loadFromJSON(p.img);
                if (p.id !== this.state.currentConvas) {
                    c.selection = false;
                    c.forEachObject(function (o) {
                        o.selectable = false;
                        convasList[p.id] = c;
                    });
                }
            }); 
         
    }
    componentWillUnmount() {
        this
            .convasList
            .each((i, p) => {})
    }

    render() {
        return <div className="MessageWindow">
            <div className="deviceInformation">
                {this.props.playList.name}
            </div>
            <div className="playlist">
                {this
                    .props
                    .playList
                    .items
                    .map((p, idx) => <div className="itemContainer" key={"convas_id" + idx}>
                        <div></div>
                        <div
                            className="imageItem"
                            style={{
                            width: 400,
                            height: 200
                        }}>

                            <canvas id={p.id} width="400" height="200"></canvas>
                            <div className="row">
                                <a href={p.id===this.state.currentConvas? "#SaveImage?" + p.id :"#EditImage?" + p.id} 
                                className={"btn btn-default fa col-xs-2 " +(p.id===this.state.currentConvas? "fa-save":"fa-edit")}></a>
                                <a href={ "#DeleteImage?" + p.id} 
                                className={"btn btn-default fa col-xs-2 fa-trash"}></a>
                                <a href={ "#MoveDownImage?" + p.id} 
                                className={"btn btn-default fa col-xs-2 fa-arrow-up"}></a>
                                <a href={ "#MoveUpImage?" + p.id} 
                                className={"btn btn-default fa col-xs-2 fa-arrow-down"}></a>

                                <div className="col-xs-5"></div>
                                <div className="input-group col-xs-3">

                                    <input type="number" className="form-control" defaultValue="30"/>
                                    <span className="btn input-group-addon fa fa-clock-o"></span>
                                </div>

                            </div>
                        </div>
                    </div>)}
                <div className="itemContainer">
                    <span
                        className="fa  fa-plus-circle"
                        style={{
                        fontSize: "2em"
                    }}/>
                </div>

            </div>
        </div>;
    }
}
