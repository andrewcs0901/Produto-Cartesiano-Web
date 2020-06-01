import React, { useState } from 'react';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
import styled from 'styled-components';

const FormSetStyle = styled.form`
    display: flex;
    margin: 1%;
    input{
        display: flex;
        padding: 4%;
        margin-right: 2em;
    }
    div{
        display: flex;
    }

`

const FormSet = (props) => {
    const initialState = ""
    const [value, setValue] = useState(initialState);

    const updateView = (value) => {
        setValue(value);
    }

    const submit = () => {
        props.action(value);
        setValue(initialState);
    }

    return (<FormSetStyle onSubmit={(event) => {event.preventDefault();submit()}}>
        <Input type="number" value={value} onChange={updateView} name={`Adicionar no conjunto ${props.name}`} />
        <div><Button label={`add in ${props.name}`} onClick={submit} disabled={value.length === 0} /></div>
    </FormSetStyle>)
}

export default FormSet;