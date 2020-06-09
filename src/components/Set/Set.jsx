import React from 'react';
import Element from './Element'
import FormSet from './FormSet';
import Button from '../Buttons/Button';
import SetStyles from './SetStyles';

const leftBracket = "{";
const rightBracket = "}";
const setNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"];

const Set = (props) => {

    const { action, sets } = props;
    let index = sets.length;

    const addElement = (value, name) => {
        action(
            sets.map(set => set.name !== name ? set : { ...set, values: [...set.values, parseInt(value)] })
        );
    }

    const removeElement = (elementToRemove, name) => {
        action(sets
            .map(set => set.name !== name ?
                set :
                {
                    ...set, values: set
                        .values.filter(element => element !== elementToRemove)
                })
        );
    }

    const addSet = () => {
        let newSet = { name: setNames[index], values: [] }
        let aux = sets;
        aux.push(newSet);
        action(aux);
        index++;
    }

    const deleteSet = (event) => {
        let newSet = sets;
        let index = newSet.map(set => set.name).indexOf(event.target.id);
        newSet.splice(index, 1);
        for(let i = 0; i < newSet.length; i++)
            newSet[i].name = setNames[i];
        action(
            newSet
        )
    }


    const renderSet = () => {
        return (
            <SetStyles>
                {sets.map(set => (
                    <div key={set.name} className="set-box">
                        <div className="set-delete">
                            <span className="delete-action" title="Excluir Conjunto" onClick={deleteSet} id={set.name}>X</span>
                        </div>
                        <div className="set-view">
                            <div className="set-name" title={`Conjunto ${set.name}`}>{set.name}:</div>
                            <div className="set-brackets">{leftBracket}</div>
                            <div className="set-elements">
                                {set.values.map((element, index) =>
                                    <div key={index} className="set-element">
                                        {index > 0 ? <span className="comma">,</span> : ""}<Element value={element} action={removeElement} name={set.name} />
                                    </div>)}
                            </div>
                            <div className="set-brackets">{rightBracket}</div>
                        </div>
                        <div>
                            <FormSet action={addElement} name={set.name} />
                        </div>
                    </div>
                )
                )}
            </SetStyles>
        )
    }

    return (<div>
        <div className="add-set">
            <Button label="Adicionar conjunto" onClick={addSet} />
        </div>
        {renderSet()}
    </div>)
}

export default Set;