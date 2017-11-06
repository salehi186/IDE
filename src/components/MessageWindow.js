import React, {Component} from 'react';
import {fabric} from 'fabric/dist/fabric';
import './Messagewindow.css';
import {permissions} from '../api/Base'

export default class MessageWindow extends Component {

    constructor(props) {
        super();
    }

    render() {
        let retValue = <div className="MessageWindow">
            <h2>ٔNo PlayList Defined</h2>
        </div>;

        if (this.props.playList) {
            let width = this.props.playList.Width,
                height = this.props.playList.Height;

            retValue = <div className="MessageWindow">
                <div className="deviceInformation">
                    {this.props.playList.Name}

                </div>
                <div className="playlist">
                    {(this.props.playList.Items || []).sort((a, b) => a.order - b.order).map((p, idx) => <PlayListItem
                        key={"ttt" + p.id}
                        item={p}
                        index={idx}
                        editMode={p.id === this.props.currentConvas}
                        width={width}
                        height={height}
                        {...this.props}/>)}
                    {!permissions("MNU_ADD_PICTURE")
                        ? ""
                        : <div
                            className="itemContainer"
                            style={{
                                textAlign:"center",
                            display: this.props.playList.Items
                                ? ""
                                : "none"
                        }}>
                            <span data-shortkey="a" title="Alt+A"
                                className="fa  fa-plus-circle"
                                style={{
                                fontSize: "2em"
                            }}
                                onClick={() => {
                                this
                                    .props
                                    .AddItem()
                            }}/>
                        </div>}
                </div>
            </div>;
        }
        return retValue;

    }
}

export class PlayListItem extends Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        let c = this.refs.canvas.fabric = new fabric.Canvas(this.refs.canvas, {
            // backgroundColor: 'black',
            selectionColor: 'red',
            selectionLineWidth: 2
            // ...
        });
        c.loadFromJSON(this.props.item.img);
        c.selection = false;
        if (!this.props.editMode) 
            c.forEachObject(function (o) {
                o.selectable = false;
                o.editable = false;
            });
        c.backgroundColor = "";
       if(window.zoom){
            c.setWidth(this.props.width*(window.zoom||1));
            c.setHeight(this.props.height*(window.zoom||1));
            c.setZoom(window.zoom||1);
        }
        c.renderAll();
        

    }
    componentWillReceiveProps(nextProps) {

        if (this.props.width !== nextProps.width) 
            this.refs.canvas.fabric.setWidth(nextProps.width*(window.zoom||1));
        if (this.props.height !== nextProps.height) 
            this.refs.canvas.fabric.setHeight(nextProps.height*(window.zoom||1));
        
        if (this.props.editMode === nextProps.editMode && this.props.item.id === nextProps.item.id && this.props.item.img === nextProps.item.img) 
            return;
        if (this.props.item.id !== nextProps.item.id || this.props.item.img !== nextProps.item.img) {
           
           let f= this.refs.canvas.fabric;
                f.loadFromJSON(nextProps.item.img);
                f.setZoom(window.zoom||1);
                f.renderAll();

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

    componentWillUnmount() {
        this
            .refs
            .canvas
            .fabric
            .dispose();
    }

    updateItem() {
        this
            .props
            .Save(Object.assign({}, this.props.item, {
                delay: (this.refs.delay.value * 1) || 10,
                Delay: (this.refs.delay.value * 1) || 10,
                image: this
                    .refs
                    .canvas
                    .fabric
                    .toJSON()
            }));
    }

    render() {
        let p = this.props.item;
        //let idx = this.props.index;
        let width = this.props.width || 400;
        let height = this.props.height || 200;
        return <div
            ref="ListItem"
            data-id={p.id}
            className={"itemContainer " + (p.isChanged
            ? "editMode"
            : "")}
            key={"convas_id" + p.id}
            title={p.order +"__" +p.id}
            style={{
            borderColor: this.props.editMode
                ? "green"
                : ""
        }}>
            <div></div>
            <div
                className="imageItem"
                style={{
                width: width,
                height: height
            }}>

                <canvas id={p.id} width={width} height={height} ref="canvas"></canvas>
                <div >
                {!permissions("MNU_Edit_PICTURE")? "":
                <a
                        onClick={this.props.editMode
                        ? () => this.updateItem()
                        : () => this
                            .props
                            .Edit(p.id, this.refs.canvas.fabric)}
                        className={"btn btn-default fa " + (this.props.editMode
                        ? "fa-save"
                        : "fa-edit")}>&nbsp;</a>}

                        {!permissions("MNU_DELETE_PICTURE")? "": <a
                        href={"#DeleteImage?" + p.id}
                        className={"btn btn-default fa fa-trash"}
                        onClick={() => this.props.DeleteItem(p.id)}>&nbsp;</a>}
                    {!permissions("MNU_CHANGE_PICTURE_ORDER")? "":<a
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
                        className={"btn btn-default fa fa-arrow-down"}>&nbsp;</a>}
                        {!permissions("MNU_CHANGE_PICTURE_ORDER")? "":<a
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
                        className={"btn btn-default fa fa-arrow-up"}>&nbsp;</a>}
                        {!permissions("MNU_IMPORT_PICTURE")? "":<a
                        onClick={() => {
                        this
                            .props
                            .Edit(p.id, this.refs.canvas.fabric);
                        window.showDialog("Images/Index", "انتخاب عکس از‌ آلبوم")
                    }}
                        className={"btn btn-default fa fa-folder-open"}>&nbsp;</a>}

                        {!permissions("MNU_CHANGE_PICTURE_DELAY")? "":<input
                        type="number"
                        className="form-control col-x-3"
                        style={{
                        width: "45px",
                        display: "inline",
                        padding: 3
                    }}
                        ref="delay"
                        onChange={() => this.updateItem()}
                        value={p.Delay}
                        title={p.Delay}/>
                }
                </div>
            </div>
        </div>
    }
}