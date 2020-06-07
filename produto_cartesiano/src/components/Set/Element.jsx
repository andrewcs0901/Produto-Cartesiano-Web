import React from 'react';
import ElementStyle from './ElementStyle'

const Element = (props) => {

    

    const onClick = () => {
        props.action(props.value, props.name);
    }

    return (
        <ElementStyle className="Set">{props.value}<div className="removeSet" onClick={onClick}>X</div></ElementStyle>
    )
}

export default Element;