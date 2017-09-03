import React, {Component} from 'react';
import {fabric} from 'fabric/dist/fabric';
import './Messagewindow.css';

export default class MessageWindow extends Component {

    constructor(props) {
        super();
    }

    render() {


        let width=this.props.playList.Width, height=this.props.playList.Height;
        const retValue = <div className="MessageWindow">
            <div className="deviceInformation">
                {this.props.playList.Name}
                
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
                        width={width}
                        height={height}
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

        if(this.props.width !=nextProps.width)
            this.refs.canvas.fabric.setWidth(nextProps.width);
        if(this.props.height !=nextProps.height)
            this.refs.canvas.fabric.setHeight(nextProps.height);
      

        if (this.props.editMode === nextProps.editMode && this.props.item.id === nextProps.item.id &&
            this.props.item.img===nextProps.item.img ) 
             return;
        if (this.props.item.id !== nextProps.item.id || this.props.item.img!==nextProps.item.img) {
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

    componentWillUnmount(){
        this
        .refs
        .canvas
        .fabric.dispose();
    }

    updateItem(){
        this.props.Save(
            Object.assign({},this.props.item,
            {delay:(this.refs.delay.value * 1) || 10,
                Delay:(this.refs.delay.value * 1) || 10,
                image:this.refs.canvas.fabric.toJSON()}
        ));
    }

    render() {
        let p = this.props.item;
        let idx = this.props.index;
        let width=this.props.width || 400;
        let height=this.props.height || 200;
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
                width: width,
                height: height
            }}>

                <canvas id={p.id} width={width} height={height} ref="canvas"></canvas>
                <div >
                    <a
                        onClick={this.props.editMode
                        ? () => this.updateItem()
                        : () => this
                            .props
                            .Edit(p.id, this.refs.canvas.fabric)}
                        className={"btn btn-default fa  " + (this.props.editMode
                        ? "fa-save"
                        : "fa-edit")}></a>
                    <a
                        href={"#DeleteImage?" + p.id}
                        className={"btn btn-default fa fa-trash"}
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
                        className={"btn btn-default fa fa-arrow-down"}></a>
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
                        className={"btn btn-default fa  fa-arrow-up"}></a>
                    <a onClick={() => {
                        this
                            .props
                            .Edit(p.id, this.refs.canvas.fabric);
                        window.showDialog("Images/Index","انتخاب عکس از‌ آلبوم")
                        }} className={"btn btn-default fa  fa-folder-open"}></a>
                    
                        <input type="number" className="form-control col-x-3" style={{width:"45px", display:"inline" , padding:3 }}
                        ref="delay" onChange={()=>this.updateItem()}
                         value={p.Delay} title={p.Delay}  />
                        
                    

                </div>
            </div>
        </div>
    }
}