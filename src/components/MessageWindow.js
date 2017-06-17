import React, {Component} from 'react';
import {fabric} from 'fabric/dist/fabric';
import './Messagewindow.css';

export default class MessageWindow extends Component {

    constructor(props) {
        super();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentConvas !== this.props.currentConvas) {
            let c = document
                .getElementById(nextProps.currentConvas);
                
            if (c) {
                c.fabric.selection = true;
                c.fabric.forEachObject(function (o) {
                    o.editable=true;
                    o.selectable = true;
                    
                });
            }
           let d = document
                .getElementById(this.props.currentConvas)
                
            if (d) {
                d.fabric.selection = false;
                d.fabric.forEachObject(function (o) {
                    o.exitEditing?o.exitEditing():null;
                    o.editable=false;
                    o.selectable = false;

                    
                });
            }
        }

    }
    componentDidMount() {
        let convasList = this.convasList = {};
        this
            .props
            .playList
            .Items
            .forEach((p, idx) => {
                let c = this.convasList[p.id] || (document.getElementById(p.id).fabric = new fabric.Canvas(document.getElementById(p.id)));
                c.loadFromJSON(p.img);
                c.selection = false;
                if (p.id !== this.props.currentConvas) 
                    c.forEachObject(function (o) {
                        o.selectable = false;
                        o.editable=false;
                        convasList[p.id] = c;
                    });
                }
            );

    }
    componentWillmount() {
        this
            .convasList
            .each((i, p) => {})
    }

    componentWillUnmount() {
        this
            .convasList
            .each((i, p) => {})
    }

    render() {
        const retValue = <div className="MessageWindow">
            <div className="deviceInformation">
                {this.props.playList.name}
            </div>
            <div className="playlist">
                {this
                    .props
                    .playList
                    .Items
                    .map((p, idx) => <div
                        className={"itemContainer " + (p.isChanged
                        ? "editMode"
                        : "")}
                        key={"convas_id" + idx}>
                        <div></div>
                        <div
                            className="imageItem"
                            style={{
                            width: 400,
                            height: 200
                        }}>

                            <canvas id={p.id} width="400" height="200" ref="canvas"></canvas>
                            <div className="row">
                                <a
                                    onClick={p.id === this.props.currentConvas
                                    ? () => this
                                        .props
                                        .save(p.id, this.refs.canvas.fabric)
                                    : () => this
                                        .props
                                        .Edit(p.id, this.refs.canvas.fabric)}
                                    className={"btn btn-default fa col-xs-2 " + (p.id === this.props.currentConvas
                                    ? "fa-save"
                                    : "fa-edit")}></a>
                                <a
                                    href={"#DeleteImage?" + p.id}
                                    className={"btn btn-default fa col-xs-2 fa-trash"}></a>
                                <a
                                    href={"#MoveDownImage?" + p.id}
                                    className={"btn btn-default fa col-xs-2 fa-arrow-up"}></a>
                                <a
                                    href={"#MoveUpImage?" + p.id}
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

        return retValue;

    }
}
