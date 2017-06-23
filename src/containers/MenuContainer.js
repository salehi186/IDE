import {connect} from 'react-redux';
import Menu from '../components/Menu';
import * as actions from '../actions';
import {fabric} from 'fabric/dist/fabric';
import fetch from 'isomorphic-fetch'


const InsertObjectToCanvas = (obJectType, params) => {
    let state = window
        .store
        .getState()
        .CurrentVMS
        .Playlist 
        .ActiveItem
    if (!state || !document.getElementById(state)) 
        return;
    
    let shape;
    switch (obJectType) {
        case "circle":
            shape = new fabric.Circle({radius: 20, fill: 'green', left: 100, top: 100});

            break;
        case "triangle":
            shape = new fabric.Triangle({width: 20, height: 30, fill: 'blue', left: 50, top: 50});

            break;
        case "text":
            shape = new fabric.IText('Add Some Text', {
                left: 100,
                top: 100
            });
            break;
        case "rectangle":
            shape = new fabric.Rect({left: 100, top: 100});

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

            // let img= document.createElement("img");
            // img.setAttribute("src",action.defaults.data); fabric     .Image
            // .fromURL(action.defaults.data,     function (img) {     //let i=22; shape =
            // img             .set({left: 0, top: 0, width: 100, height: 100}) .scale(0.9);
            //     });
            break;
        default:
            break;
    }
    let f = document
        .getElementById(state)
        .fabric;
    f.add(shape);
    f.renderAll();

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: InsertObjectToCanvas,
        refresh: () => {
            dispatch(actions.DeviceManager.FetchList());
        },
        SendPlaylistToServer:()=>{
           let pl=window.store.getState().CurrentVMS.Playlist;
//                 public ActionResult ShowPlayListinVMS(int? VMSID, int PlayListid)
            if(!pl || !pl.Id || !pl.VMSID){
                alert("NO ACTIVE VMS FOUND");
                return;
            }
          fetch(window.baseURL+ "/VMss/ShowPlayListinVMS?VMSID="+pl.VMSID+"&PlayListid="+pl.Id)
          .then(
              res=>res.json(),
              err=>alert(err)
          ).then(json=>alert(json)) ;

        }
    };
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer;