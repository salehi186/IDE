import React, {Component} from 'react'
import './Properties.css'
export default class Properties extends Component {

    render() {
        return <div className="properties">
            <span>Properties
            </span>
            <ul>
                {Object
                    .keys(this.props.propsList)
                    .map((p, idx) => {
                        return <li key={"prop" + idx}>
                            <label>{p}</label>
                            <div className="input-group">
                            <input type="text" name={p} defaultValue={this.props.propsList[p]} className="form-control"/>
                           <span className="input-group-addon fa fa-send btn"></span>
                            </div>
                        </li>;
                    })}
                <li className="center">
                    <br/>
                    <span className="btn btn-default fa fa-send">Submit All Properties</span>
                    <br/>
                </li>
            </ul>
        </div>;
    }
}



