import React from 'react';
import styled from 'styled-components';

const Element = (props) => {

    const ElementStyle = styled.div`
        border: 1px solid black;
        padding: 0.05em;
        border-radius: 9%;
        font-weight: 700;
        display: flex;
        width: min-content;

        div.removeSet{
            cursor: pointer;
            color: #fff;
            font-size: 0.6em;
            border-radius: 50%;
            font-family: monospace;
            width: 1em;
            text-align: center;
            margin: auto;
            background-color: #a80000;

        }
    `

    const onClick = () => {
        props.action(props.value);
    }

    return (
        <ElementStyle>{props.value}<div className="removeSet" onClick={onClick}>X</div></ElementStyle>
    )
}

export default Element;