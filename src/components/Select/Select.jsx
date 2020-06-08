import React, { useState, useEffect } from 'react';

const Select = (props) => {

    const standard = "Selecionar";
    const [value, setValue] = useState(props.standard !== undefined? props.standard : standard);
    const { onSelect, index } = props;

    const select = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        onSelect(value, index)
    }, [value])

    return (
        <div className={props.className}>
            <select onChange={select} value={value} disabled={props.options.length < 2}>
                <option value={""}>{standard}</option>
                {props.options.length && props.options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>

        </div>
    )
}

export default Select;