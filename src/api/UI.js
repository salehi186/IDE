import React  from 'react'

export const Button=({onClick, text, icon} )=>{
    return <a  onClick={onClick} className="Button" >
        <span className={"fa "+ icon} ></span>
        </a>;
}

