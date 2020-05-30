import React from 'react';

const Element = (props) => {

    const onClick = () =>{
        props.action(props.value);
    }

    return (
        <span onClick={onClick}>{props.value}</span>
    )
}

export default Element;