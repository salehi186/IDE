import * as ACTIONS from '../actions';
import stateTree from './initState';
import {fabric} from 'fabric/dist/fabric';
///Convas manipulation
export function CanvasReducer(state = {}, action) {
    switch (action.type) {
        case ACTIONS.CanvasActions.INSERT_OBJECT:
            if(!state)
            return state;
            let shape;
            switch (action.shape) {
                case "circle":
                    shape = new fabric.Circle({radius: 20, fill: 'green', left: 100, top: 100});

                    break;
                case "triangle":
                    shape = new fabric.Triangle({width: 20, height: 30, fill: 'blue', left: 50, top: 50});

                    break;
                case "text":
                    shape = new fabric.Text('Add Some Text', { left: 100, top: 100  });
                    
                    break;
                default:
                    break;
            }
            document.getElementById(state).fabric.add(shape);
            return Object.assign({}, state, {isChanged: true});
            
             

        

        default:
            return state;
    }
}
