import React, { useState } from 'react';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';

const FormSet = (props) => {
    const initialState = ""
    const [value, setValue] = useState(initialState);

    const updateView = (event) => {
        setValue(event.target.value);
    }

    const submit = () =>{
        props.action(value);
        setValue(initialState);
    }

    return (<form onSubmit={(event) => event.preventDefault()}>
        <Input type="number" value={value} onChange={updateView}/>
        <Button label={`add in ${props.name}`} onClick={submit} disabled={value.length === 0}/>
    </form>)
}

export default FormSet;