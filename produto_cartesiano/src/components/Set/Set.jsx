import React, { useState } from 'react';
import Element from './Element'
import FormSet from './FormSet';
import { useEffect } from 'react';
import Button from '../Buttons/Button';

const leftBracket = "{";
const rightBracket = "}";
const setNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"];

const Set = (props) => {

    const [elements, SetElements] = useState({
        index: 0,
        sets: []
    });
    const { action, name } = props;

    const addElement = (value, name) => {
        SetElements({
            ...elements, 
            sets: elements.sets
                    .map(set => set.name !== name ? set : {...set, values: [...set.values, value]} )
        });
    }

    const removeElement = (elementToRemove, name) => {
        SetElements({
            ...elements, 
            sets: elements.sets
                    .map(set => set.name !== name ? 
                            set : 
                            {...set, values: set
                                            .values.filter(element => element !== elementToRemove)} )
        });
    }

    const addSet = () => {
        SetElements({
            index: elements.index + 1,
            sets: [...elements.sets, { name: setNames[elements.index], values: [] }]
        })
    }

    useEffect(() => {
        action(elements.sets);
    }, [elements])

    const renderSet = () => {
        return (
            <div>
                {elements.sets.map(set => (
                    <div key={set.name}>
                        <div style={{ display: "flex" }}>
                            <div>{set.name}:</div>
                            {leftBracket}
                            {set.values.map((element, index) =>
                                <span key={index} style={{ display: 'flex' }}>
                                    {index > 0 ? "," : ""}<Element value={element} action={removeElement} name={set.name}/>
                                </span>)}
                            {rightBracket}
                        </div>
                        <div>
                            <FormSet action={addElement} name={set.name} />
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }

    return (<div>
                <div>
                    <Button label="Adicionar conjunto" onClick={addSet} />
                </div>
                {renderSet()}
            </div>)
}

export default Set;