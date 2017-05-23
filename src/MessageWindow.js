import React, {Component} from 'react';
import {fabric} from 'fabric';
import './Messagewindow.css';

export default class MessageWindow extends Component {

    constructor(props) {
        super();
        this.playlist = {
            id: 12,
            name: "test",
            items: [
                {
                    img: '{"objects":[{"type":"circle","originX":"left","originY":"top","left":290,"top":1' +
                            '82.98,"width":319.88,"height":319.88,"fill":"#c8c885","stroke":null,"strokeWidth' +
                            '":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","stro' +
                            'keMiterLimit":10,"scaleX":1.23,"scaleY":0.67,"angle":0,"flipX":false,"flipY":fal' +
                            'se,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","' +
                            'fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":n' +
                            'ull,"skewX":0,"skewY":0,"radius":159.94059386257265,"startAngle":0,"endAngle":6.' +
                            '283185307179586},{"type":"i-text","originX":"left","originY":"top","left":135,"t' +
                            'op":91.08,"width":148.96,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"stroke' +
                            'Width":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter",' +
                            '"strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":fals' +
                            'e,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","f' +
                            'illRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":nu' +
                            'll,"skewX":0,"skewY":0,"text":"asdfsfsd","fontSize":40,"fontWeight":"normal","fo' +
                            'ntFamily":"arial","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlig' +
                            'n":"left","textBackgroundColor":"","charSpacing":0,"styles":{"0":{"1":{},"2":{},' +
                            '"3":{},"4":{},"5":{},"6":{},"7":{},"8":{}}}}],"background":""}',
                    time: 30,
                    id: 123,
                    width: 500,
                    height: 500,
                    name: "firstImage"
                }, {
                    img: '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"gre' +
                            'en","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"sca' +
                            'leX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable"' +
                            ':true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparent' +
                            'Corners":true,"perPixelTargetFind":false,"rx":0,"ry":0}],"background":"rgba(0, 0' +
                            ', 0, 0)"}',
                    time: 30,
                    id: 1243,
                    width: 500,
                    height: 500,
                    name: "firstImage"
                }
            ]
        }
    }

    callAction(action) {}
    componentDidMount() {
        let convasList = {};
        this
            .playlist
            .items
            .map((p, idx) => {
                let c = new fabric.Canvas(document.getElementById(p.id));
                c.loadFromJSON(p.img);
                c.selection = false;
                c.forEachObject(function (o) {
                    o.selectable = false;
                    convasList[p.id] = c;
                });
            });
        this.convasList = convasList;
    }
    componentWillUnmount() {
        this
            .convasList
            .each((i, p) => {})
    }

    render() {
        return <div className="MessageWindow">
            <div className="deviceInformation">
                {this.playlist.name}

            </div>
            <br/>
            <div className="imageContainer">
                {this.playlist.items.length}
                {this
                    .playlist
                    .items
                    .map((m, idx) => <div className="itemContainer" key={"convas_id" + idx}>
                        <div
                            className="imageItem"
                            style={{
                            width: 400,
                            height: 200
                        }}>
                            <canvas id={m.id} width="400" height="200"></canvas>
                        </div>
                    </div>)}

            </div>
        </div>;
    }
}
