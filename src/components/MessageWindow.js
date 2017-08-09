import React, {Component} from 'react';
import {fabric} from 'fabric/dist/fabric';
import './Messagewindow.css';

export default class MessageWindow extends Component {

    constructor(props) {
        super();
    }

    render() {
        const retValue = <div className="MessageWindow">
            <div className="deviceInformation">
                {this.props.playList.name}
            </div>
            <div className="playlist">
                {(this
                    .props
                    .playList
                    .Items||[])
                    .sort((a, b) => a.order - b.order)
                    .map((p, idx) => <PlayListItem
                        key={"ttt" + idx}
                        item={p}
                        index={idx}
                        editMode={p.id === this.props.currentConvas}
                        {...this.props}/>)}
                <div className="itemContainer">
                    <span
                        className="fa  fa-plus-circle"
                        style={{
                        fontSize: "2em"
                    }}
                    onClick={()=>{ this.props.AddItem()}}
                    />
                </div>

            </div>
        </div>;

        return retValue;

    }
}

export class PlayListItem extends Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        let c = this.refs.canvas.fabric = new fabric.Canvas(this.refs.canvas);
        c.loadFromJSON(this.props.item.img);
        c.selection = false;
        if (!this.props.editMode) 
            c.forEachObject(function (o) {
                o.selectable = false;
                o.editable = false;
            });
        c.renderAll();

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.editMode === nextProps.editMode && this.props.item.id === nextProps.item.id) 
            return;
        if (this.props.item.id !== nextProps.item.id) {
            this
                .refs
                .canvas
                .fabric
                .loadFromJSON(nextProps.item.img);
            this
                .refs
                .canvas
                .fabric
                .renderAll();

        }

        // let c = this.refs.canvas; //
        // document.getElementById(nextProps.currentConvas); c.fabric.selection =
        // nextProps.editMode;
        this
            .refs
            .canvas
            .fabric
            .forEachObject(function (o) {
                o.editable = nextProps.editMode;
                o.selectable = nextProps.editMode;

            });

        // let d = document.getElementById(this.props.currentConvas) if (d) {
        // d.fabric.selection = false;     d         .fabric .forEachObject(function (o)
        // {             o.exitEditing                 ? o.exitEditing() : null;
        // o.editable = false;       o.selectable = false; }); }

    }

    render() {
        let p = this.props.item;
        let idx = this.props.index;
        return <div
            ref="ListItem"
            data-id={p.id}
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
                        onClick={this.props.editMode
                        ? () => this
                            .props
                            .Save(p.id, this.refs.canvas.fabric)
                        : () => this
                            .props
                            .Edit(p.id, this.refs.canvas.fabric)}
                        className={"btn btn-default fa col-xs-2 " + (this.props.editMode
                        ? "fa-save"
                        : "fa-edit")}></a>
                    <a
                        href={"#DeleteImage?" + p.id}
                        className={"btn btn-default fa col-xs-2 fa-trash"}
                        onClick={()=>this.props.DeleteItem(p.id)}
                        ></a>
                    <a
                        onClick={() => {
                        let curId = p.id;
                        let nextId = this.refs.ListItem.nextSibling.dataset.id * 1;
                        let curImage = this
                            .refs
                            .canvas
                            .fabric
                            .toJSON();
                        let nextImage = document
                            .getElementById(nextId)
                            .fabric
                            .toJSON();
                        this
                            .props
                            .SwapItems(curId, nextId, curImage, nextImage);
                    }}
                        className={"btn btn-default fa col-xs-2 fa-arrow-down"}></a>
                    <a
                        onClick={() => {
                        let curId = p.id;
                        let nextId = this.refs.ListItem.previousSibling.dataset.id * 1;
                        let curImage = this
                            .refs
                            .canvas
                            .fabric
                            .toJSON();
                        let nextImage = document
                            .getElementById(nextId)
                            .fabric
                            .toJSON();
                        this
                            .props
                            .SwapItems(curId, nextId, curImage, nextImage);
                    }}
                        className={"btn btn-default fa col-xs-2 fa-arrow-up"}></a>
                    <a onClick={() => {
                        window.showDialog("Images/Index","انتخاب عکس از‌ آلبوم")
                        }} className={"btn btn-default fa col-xs-1 fa-folder-open"}></a>
                    <div className="input-group col-xs-3">
                        <input type="number" className="form-control" defaultValue={p.delay}/>
                        <span className="btn input-group-addon fa fa-clock-o"></span>
                    </div>

                </div>
            </div>
        </div>
    }
}