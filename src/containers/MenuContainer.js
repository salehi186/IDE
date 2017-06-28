import {connect} from 'react-redux';
import Menu from '../components/Menu';
import * as actions from '../actions';
import {fabric} from 'fabric/dist/fabric';
import fetch from 'isomorphic-fetch'

function deleteObjects(canvas) {
    let activeObject = canvas.getActiveObject(),
        activeGroup = canvas.getActiveGroup();
    if (activeObject) {
        if (confirm('Are you sure?')) {
            canvas.remove(activeObject);
        }
    } else if (activeGroup) {
        if (confirm('Are you sure?')) {
            var objectsInGroup = activeGroup.getObjects();
            canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                canvas.remove(object);
            });
        }
    }
}

const ManipulateCanvas = (obJectType, params) => {
    let state = window
        .store
        .getState()
        .CurrentVMS
        .Playlist
        .ActiveItem
    if (!state || !document.getElementById(state)) 
        return;
    let f = document
        .getElementById(state)
        .fabric;
    f.fillStyle = 'red';

    switch (params.type) {

        case "insert":
            let shape;

            switch (obJectType) {
                case "circle":
                    shape = new fabric.Circle({radius: 20, left: 100, top: 100});

                    break;
                case "triangle":
                    shape = new fabric.Triangle({width: 20, height: 30, left: 50, top: 50});

                    break;
                case "text":
                    shape = new fabric.IText('Add Some Text', {
                        left: 100,
                        top: 100
                    });
                    break;
                case "rect":
                    shape = new fabric.Rect({left: 100, top: 100, width: 20, height: 20});

                    break;
                case "image":
                    var img = new Image();
                    shape = new fabric.Image(img, {
                        left: 0,
                        top: 0,
                        width: 50,
                        height: 50,
                        angle: 0,
                        opacity: 1
                    });

                    img.onload = function () {
                        let f = document
                            .getElementById(state)
                            .fabric;

                        shape.setElement(img);
                        shape.width = 50;
                        shape.height = 50;
                        f.renderAll();
                        f.setActiveObject(shape);

                    }
                    img.src = params.data;
                    break;
                default:
                    break;
            }
            f.add(shape);
            break;
        case "setting":
            let activeObject = f.getActiveObject();

            switch (obJectType) {
                case "backColor":
                    activeObject.setColor(params.color);
                    break;
                case "borderColor":
                    activeObject.set({borderColor: params.color});
                    break;
            }
            break;
        case "delete":
            deleteObjects(f);
            break;
        case "update":

            switch (obJectType) {
                case "dock":

                    //activeObject.setWidth(f.height); activeObject.setHeight(f.width);
                    f
                        .getActiveObject()
                        .set({
                            top: 0,
                            left: 0,
                            width: 150,
                            height: 150,
                            scaleX: 150 / activeObject.getWidth(),
                            scaleY: 150 / activeObject.getHeight()
                        });

                    break;
                case "moveBack":
                    f
                        .getActiveObject()
                        .sendBackwards();

                    break;
            }

            break;
        case "mode":
            switch (obJectType) {
                case "draw":
                    f.isDrawingMode = true;
                    break;
                case "select":
                    f.isDrawingMode = false;
                    break
            }

            break;

        default:

    }
    f.renderAll();

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: ManipulateCanvas,
        refresh: () => {
            dispatch(actions.DeviceManager.FetchList());
        },
        SendPlaylistToServer: () => {
            let pl = window
                .store
                .getState()
                .CurrentVMS
                .Playlist;
            //                 public ActionResult ShowPlayListinVMS(int? VMSID, int
            // PlayListid)
            if (!pl || !pl.Id || !pl.VMSID) {
                alert("NO ACTIVE VMS FOUND");
                return;
            }
            fetch(window.baseURL + "/VMss/ShowPlayListinVMS?VMSID=" + pl.VMSID + "&PlayListid=" + pl.Id).then(res => res.json(), err => alert(err)).then(json => alert(json));

        },
        SavePlayList: () => {
            let pl = window
                .store
                .getState()
                .CurrentVMS
                .Playlist;
            if (!pl || !pl.Id || !pl.VMSID) {
                alert("NO ACTIVE VMS FOUND");
                return;
            }

let pls={PlayListTemplateID:pl.Id
    //,Items:pl.Items.map(p=>{return {ImageID:p.ImageID,
     //ImageContent:  JSON.stringify(document.getElementById( p.ImageID).fabric.toJSON()).toString(),  
     //PlayOrder:p.order,Delay:p.delay}}) 
    };

let data = new FormData();
data.append( "data", JSON.stringify(   JSON.stringify(pls)   ));
            fetch(window.baseURL + "/VMss/SavePlayList", {
                method: "POST",
                header: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    },
                body:data
            }).then(res => res.json(), err => alert(err)).then(json => alert(json));

        }

    };
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer;