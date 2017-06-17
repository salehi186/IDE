import * as ACTIONS from '../actions';
import stateTree from './initState';
import {fabric} from 'fabric/dist/fabric';
///Convas manipulation
export function CanvasReducer(state = {}, action) {
            let shape;
            switch (action.shape) {
                case "circle":
                    shape = new fabric.Circle({radius: 20, fill: 'green', left: 100, top: 100});

                    break;
                case "triangle":
                    shape = new fabric.Triangle({width: 20, height: 30, fill: 'blue', left: 50, top: 50});

                    break;
                case "text":
                    shape = new fabric.IText('Add Some Text', { left: 100, top: 100  });
                    break;
                case "rectangle":
                    shape = new fabric.Rect( { left: 100, top: 100  });
                    
                    break;
                default:
                    break;
            }
            document.getElementById(state).fabric.add(shape);
 }
