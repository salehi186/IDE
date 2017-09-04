import React, {Component} from 'react'
import './Properties.css'
export default class Properties extends Component {

    render() {
        return <div className="properties" style={{
            overflow: "auto"
        }}>
            <form >
                <ul>
                    {this
                        .props
                        .propsList
                        .map((p, idx) => {
                            let control = p.Showkind===0? <input
                                type="text"
                                id={"prop_" + p.FucnctionName}
                                name={p.FucnctionName + p.InputVariableName}
                                value={p.value}                                
                                readOnly={p.Readonly}
                                className="form-control"
                                onChange={(e) => {
                                this
                                    .props
                                    .SetProperty(e.target.name, e.target.value)
                            }}
                                style={{
                                borderColor: p.Ischanged
                                    ? "red"
                                    : ""
                            }}
                            
                            />
                            :
                            <select 
                            id={"prop_" + p.FucnctionName}
                                name={p.FucnctionName + p.InputVariableName}
                                disabled={p.Readonly}
                                className="form-control"
                                onChange={(e) => {
                                this
                                    .props
                                    .SetProperty(e.target.name, e.target.value)
                            }}
                                style={{
                                borderColor: p.Ischanged
                                    ? "red"
                                    : ""
                            }}
                            >
                                {p.Options.split(',').map(x=><option key={x} value={x.split(':')[1]}>{x.split(':')[0]}</option> )}
                            </select>
                            ;

                            return <li key={"prop" + idx}>
                                <label>{p.Text}</label>
                                {control}
                            </li>;
                        })}

                </ul>
            </form>
        </div>;
    }
}
