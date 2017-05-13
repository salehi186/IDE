import React, {Component} from 'react'

export default class Properties extends Component {

    status = {
        properties: {
            Name: "",
            ip: "172.17.8.13",
            temprature: "12",
            userName: "name",
            password: "dfsf"

        }
    }
    render() {
        return <table >
            {Object.keys( this
                .props.properties)
                .map((p, idx) => {
                    return <tr key={"prop" + idx}>
                        <td>
                            {p}
                        </td>
                        <td>
                           <input type="text" name={p} value={this.props.properties[p]} />
                        </td>
                    </tr>;
                })}
        </table>;
    }

}
