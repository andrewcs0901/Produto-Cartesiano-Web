import React, { useState } from 'react';
import Select from '../Select/Select';
import Operation from './Operation';
import Input from '../Inputs/Input';
import { aritmetica, logica, especial, condicional } from './OperationsList';
import ExpressionStyle from './ExpressionStyle';

const Expression = (props) => {

    const [expression, setExpression] = useState({
        operacao: "",
        type: ""
    });

    const onSets = [aritmetica(), logica(), especial()];
    const condition = [condicional()];

    const updateExpression = (value, index, type = expression.type) => {
        setExpression({
            ...expression, type: type, [index]: value !== "X" ? value : ""
        })
    }

    const renderOperation = (set, operacao) => (
        <div className="operationSet">
            <Select options={props.options}
                onSelect={updateExpression}
                index={set[0]}
                className="subSections"
                standard={expression[set[0]]} />
            <Operation onClick={updateExpression} operations={onSets} name="subSections" marked={expression[operacao]} index={operacao} />
            {expression[operacao] !== especial().name && <Input className="subSections" onChange={updateExpression} index={set[1]} />}
            {(expression[operacao] === "+" || expression[operacao] === "-")
                && <> = <Input type="number" onChange={updateExpression} index={"equivalencia"} value={expression.equivalencia} /></>}
        </div>
    )

    return (<div>
        <h3>Expressão</h3>
        <ExpressionStyle>
            {renderOperation(["conjunto_a", "conjunto_b"], "operacao1")}
            <div className="conditional">
                <Operation onClick={updateExpression} operations={condition} index={condicional().name} marked={expression.Condicional} />
            </div>
            {(expression.Condicional && expression.Condicional.length) && renderOperation(["conjunto_c", "conjunto_d"], "operacao2")}
        </ExpressionStyle>

    </div>)
}

export default Expression;