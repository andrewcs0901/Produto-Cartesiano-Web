import React, { useState } from 'react';
import Select from '../Select/Select';
import Operation from './Operation';
import Input from '../Inputs/Input';

const Expression = (props) => {

    const [expression, setExpression] = useState([]);

    const updateExpression = (value, index) => {
        const aux = expression;
        aux[index] = value;
        setExpression(aux);
    }

    return (<div>
        <h3>Expressão</h3>
        <div>
            <div>
                <Select options={props.options} 
                        onSelect={updateExpression}
                        index={0}/>
                <Operation onClick={updateExpression} />
                <Input />
            </div>
            <div>
                
            </div>
            <div>
                <Select options={props.options} onSelect={updateExpression} index={1}/>
                <Operation onClick={updateExpression} />
                <Input />
            </div>

        </div>

    </div>)
}

export default Expression;