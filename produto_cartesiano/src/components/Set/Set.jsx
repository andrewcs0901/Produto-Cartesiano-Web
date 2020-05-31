import React, { useState } from 'react';
import Element from './Element'
import FormSet from './FormSet';
import { useEffect } from 'react';

const leftBracket = "{";
const rightBracket = "}";

const Set = (props) => {

    const [elements, SetElements] = useState(new Int32Array());
    const { action, name } = props;

    const addElement = (value) => {
        SetElements([...elements, value]);
    }

    const removeElement = (elementToRemove) => {
        SetElements(elements.filter(element => element !== elementToRemove));
    }

    useEffect(() => {
        action(name, elements);
    }, [elements])

    const renderSet = () => {
        return (
            <>
                {leftBracket}
                {elements.map((element, index) =>
                    <span key={index} >
                        {index > 0 ? "," : ""}<Element value={element} action={removeElement} />
                    </span>)}
                {rightBracket}
            </>
        )
    }

    return (<>
        <div>
            <span>{props.name}:</span>{renderSet()}
        </div>
        <div>
            <FormSet action={addElement} name={props.name} />
        </div>
    </>)
}

export default Set;