import {connect} from 'react-redux';
import Menu from '../components/Menu';
import * as actions from '../actions';
import {fabric} from 'fabric/dist/fabric';
import fetch from 'isomorphic-fetch';
import Utils from '../api/fabricUtils';

//alert(11);
window
    .document
    .addEventListener("DOMContentLoaded", (event) => {
        loadSymbols();

    });

function loadSymbols() {
    fetch(window.baseURL + "VMss/Symbols", {credentials: 'include'}).then(res => {
        return res.json()
    }, err => alert(err)).then(res => {
        document
            .getElementById("MaskSymbols")
            .innerHTML = res.map((x) => "<img class='MaskSymbols' style='width:50px;height:50px;' src='" + window.baseURL + "/Symbols/" + x + "' alt='" + x + "' />").join(' ');
        var symbolClickHandler = function () {
            ManipulateCanvas("InsertSVG", {
                type: "InsertSVG",
                url: this.src
            });
        }
        Array
            .prototype
            .forEach
            .call(document.getElementsByClassName("MaskSymbols"), x => {
                x.addEventListener("click", symbolClickHandler.bind(x))
            })
    })
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
    f.fillStyle = document
        .querySelector("[type=color]")
        .value;

    let UtilsModule = new Utils(f);

    //UtilsModule.setCanvas(f);
    switch (params.type) {

        case "insert":
            let shape;

            switch (obJectType) {
                case "circle":
                    shape = new fabric.Circle({radius: 20, left: 20, top: 20, fill: f.fillStyle});

                    break;
                case "triangle":
                    shape = new fabric.Triangle({width: 20, height: 30, left: 20, top: 20, fill: f.fillStyle});

                    break;
                case "text":
                    shape = new fabric.IText('Add Some Text', {
                        left: 20,
                        top: 20,
                        fill: f.fillStyle
                    });
                    break;
                case "rect":
                    shape = new fabric.Rect({left: 20, top: 20, width: 20, height: 20, fill: f.fillStyle});

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
                case "font":
                    activeObject.set({fontFamily: params.font});
                    setTimeout(function () {
                        f.renderAll();
                    }, 1000);
                    break;
                case "align":
                   activeObject.set({textAlign:  params.mode});
                   break;
                case "clear":
                    f.clear();
                    break;
                case "fontWeight":
                    activeObject.set({fontWeight: params.fontWeight});
                    break;
               
                default:

            }
            break;
        case "InsertSVG":

            UtilsModule.insertSvg(params.url, document.querySelector(".loader"));
            break;
        case "delete":
            UtilsModule.deleteSelected();
            //deleteObjects(f);
            break;
        case "update":

            switch (obJectType) {
                case "dock":

                    UtilsModule.getImageBounds(true);

                    // //activeObject.setWidth(f.height); activeObject.setHeight(f.width); f
                    // .getActiveObject()     .set({         top: 0,         left: 0,         width:
                    // 150,         height: 150,         scaleX: 150 / activeObject.getWidth(),
                    // scaleY: 150 / activeObject.getHeight()     });

                    break;
                case "moveBack":
                    UtilsModule.sendToBack();

                    break;
                default:

            }

            break;
        case "mode":
            switch (obJectType) {
                case "draw":
                    f.isDrawingMode = true;
                    f.freeDrawingBrush.color = f.fillStyle;
                    break;
                case "select":
                    f.isDrawingMode = false;
                    break
                default:
            }

            break;

        default:

    }
    f.renderAll();

}

const mapStateToProps = (state) => {
    return {}
}

const getPlayListFromCanvas = () => {
    let pl = window
        .store
        .getState()
        .CurrentVMS
        .Playlist;
    if (!pl || !pl.Id || !pl.VMSID) {
        alert("هنوز هیچ دستگاهی انتخاب نشده است");
        return;
    }

    let pls = {
        PlayListTemplateID: pl.Id,
        Items: pl
            .Items
            .map(p => {
                let ff=document.getElementById(p.id).fabric;
                ff.backgroundColor="black";
                return {
                    PlayListTemplateItemID: p.PlayListTemplateItemID,
                    ImageID: p.ImageID || -1,
                    ImageContent: JSON
                        .stringify(ff.toJSON())
                        .toString(),
                    ImageBase64: ff.toDataURL(),
                    PlayOrder: p.order,
                    Delay: p.delay
                }
            })
    };
    return pls;

}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: ManipulateCanvas,
        refresh: () => {
            dispatch(actions.DeviceManager.FetchList());
        },
        SendPlaylistToServer: () => {
            let pls=getPlayListFromCanvas();
            let data = new FormData();
            data.append("data", JSON.stringify(pls));
            data.append("VMSID",window.store.getState().VMSGroups.ActiveVMS);
            fetch(window.baseURL + "/VMss/ShowPlayListinVMS", {
             // 'mode': 'no-cors',
             method: "POST",
             credentials: 'include',
             header: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
             },
             body: data
         }).then(res => {
             return res.json()
         }, err => alert(err)).then(json => {
             alert(json);
             });
            
        },
        SavePlayList: () => {
            let pls=getPlayListFromCanvas();
            let data = new FormData();
            data.append("data", JSON.stringify(pls));

            fetch(window.baseURL + "/VMss/SavePlayList", {
                // 'mode': 'no-cors',
                method: "POST",
                credentials: 'include',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: data
            }).then(res => {
                return res.json()
            }, err => alert(err)).then(json => {
                alert("تغییرات با موفقیت ذخیره گردید.");

                if (json * 1 > 0) 
                    dispatch(actions.DeviceManager.SelectVMS(window.store.getState().VMSGroups.ActiveVMS))
                    // alert(json)
                });

        },
        SaveProperties: () => {
            let props = window
                .store
                .getState()
                .CurrentVMS
                .VMSProps;
            let VMSID = window
                .store
                .getState()
                .VMSGroups
                .ActiveVMS;
            if (!props) {
                alert("هنوز هیچ دستگاهی انتخاب نشده است");
                return;
            }

            let data = new FormData();
            data.append("props", JSON.stringify(props));
            data.append("vmsid", VMSID);

            fetch(window.baseURL + "/VMss/Vms_SetProperties", {
                // 'mode': 'no-cors',
                method: "POST",
                credentials: 'include',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: data
            }).then(res => {
                return res.json()
            }, err => alert(err)).then(json => {
                alert("تنظیمات با موفقیت به دستگاه ارسال گردید.");
                dispatch(actions.PropsSaved());
            });
        }
    };
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer;