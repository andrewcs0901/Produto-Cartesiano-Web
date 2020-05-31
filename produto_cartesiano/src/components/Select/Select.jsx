import React,{ useState, useEffect }  from 'react';

const Select = (props) => {

    const standard = props.standard || "Selecionar";
    const [value, setValue] = useState(standard);
    const {onSelect, index} = props;

    const select = (event) => {
        setValue(event.target.value);
        props.onSelect(event.target.value);
    }

    useEffect( () => {
        onSelect(value, index)
    }, [value])   

    return (
    <select onChange={select} value={value} disabled={props.options.length < 2}>
        <option value={standard}>{standard}</option>
        {props.options.length && props.options.map(option => <option value={option} key={option}>{option}</option>)}
    </select>)
}

export default Select;