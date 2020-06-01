import React from 'react';

const Input = (props) => {

    const onChange = (event) => {
        props.onChange(event.target.value, props.index)
    }

    return (
        <div className={props.className}>
            <input type={props.type || "text"}
                name={props.name}
                value={props.value}
                onChange={onChange}
                placeholder={props.name || "input"}
                readOnly={props.disabled == 0}
                
            />
        </div>
    )

}


export default Input;