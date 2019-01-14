import React, {Component} from 'react'
import './Properties.css'
import {MenuItem} from './Menu';
export default class Properties extends Component {

    render() {
        return <div className="properties" style={{
            overflow: "auto"
        }}>
            <form >
                <ul>
                    <li >

        <MenuItem
          ID="MNU_TEST_DEVICE"  className="col-xs-12 col-md-12 col-lg-12"
          text="تست رنگ"
          icon="fa-user-md" //shortKey="p" title="Alt+P"
          Click={() => { window.showDialog("VMSs/DeviceTest", "تست رنگ")
        }}/>

        <MenuItem
          ID="MNU_SEND_PROPS" className="col-xs-12 col-md-12 col-lg-12"
          text="ارسال تنظیمات"
          icon="fa-gears" shortKey="t" title="Alt+T"
          Click={() => this.props.SaveProperties()}/>
                    </li>

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
