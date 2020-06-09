import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Button';
import OperationStyle from './OperationStyle';

const Operation = (props) => {

    const { operations } = props;
    const [marked, setMarked] = useState(props.marked);

    const handleClick = (event, type) => {
        setMarked(event.target.name);
        props.onClick(event.target.name, props.index || "operacao", type);
    }

    const isMarked = (action) => {
        return (marked.length && marked === action) ? true : false
    }

    useEffect(() => {
        setMarked(props.marked)
    }, [props.marked.length === 0])

    const renderOperations = () => {
        if (operations)
            return (<div className={props.name}>
                {operations.map(
                    operation => (
                        <OperationStyle key={operation.name} className="Operation">
                            <div>{operation.name}:</div>
                            {operation.actions
                                .map(action =>
                                    <Button label={action}
                                        key={action} onClick={handleClick}
                                        status={isMarked(action)}
                                        type={operation.name}
                                    />)}
                        </OperationStyle>
                    )
                )}</div>)
        else return (<></>)
    }


    return renderOperations()
}

export default Operation;