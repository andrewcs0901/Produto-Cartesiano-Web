import React from 'react';

const Button = (props) => {

    const {label, name, onClick, status, type} = props;

    const click = (event) =>{
        onClick(event, type);
    }

    return (
        <button onClick={click} 
                name={name || label || "button"} 
                disabled={props.disabled} className={status? "active" : "not_active"}>
            {label || "button"}
        </button>
    )
} 

export default Button;