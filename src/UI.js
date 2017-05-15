import React ,{Component, PropTypes} from 'react'

export const Button=({onClick, text, icon} )=>{
    return <a  onClick={onClick} >
        <span className={"fa "+ icon} ></span>
        </a>;
}

