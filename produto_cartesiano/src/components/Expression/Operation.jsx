import React from 'react';
import Button from '../Buttons/Button';

const notEquals = String.fromCodePoint(parseInt(2260, 16));

const operations =[
        {
            name: "Aritmética", actions: ["+","-","x","/"]
        },
        {
            name: "Lógica", actions: ["=",notEquals,">","<","||","&&"]
        },
        {
            name: "Especial", actions: ["par","impar","primo"]
        },

    ]

const Operation = () => {

    const renderOperations = () => (
        operations.map(
            operation => (
                <div key={operation.name}>
                    {operation.name}:
                    {operation.actions.map(action => <Button label={action} key={action}/>)}
                </div>
            )
        )
    )

    return renderOperations()
}

export default Operation;