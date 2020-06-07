import React, { useState } from 'react';
import Select from '../Select/Select';
import Operation from './Operation';
import Input from '../Inputs/Input';
import { aritmetica, logica, especial, condicional } from './OperationsList';
import ExpressionStyle from './ExpressionStyle';
import Button from '../Buttons/Button';

const Expression = (props) => {

    const [expression, setExpression] = useState({
        operacao: "",
        type: "",
        operacao1: "",
        equivalencia: "",
        ready: false
    });

    const onSets = [aritmetica(), logica(), especial()];
    const condition = [condicional()];

    const updateExpression = (value, index, type = expression.type) => {
        setExpression({
            ...expression, type: type, [index]: value !== "X" ? value : ""
        })
    }

    const SendExpression = () =>{
        let auxExpression = {
            conjunto_a: expression.conjunto_a,
            conjunto_b: expression.conjunto_b,
            operacao: expression.operacao || expression.operacao1
        }
        props.calculate(auxExpression);
    }

    const renderOperation = (set, operacao) => (
        <div className="operationSet">
            <Select options={props.options}
                onSelect={updateExpression}
                index={set[0]}
                className="subSections"
                standard={expression[set[0]]} />
            <Operation onClick={updateExpression} operations={onSets} name="subSections" marked={expression[operacao]} index={operacao} />
            
            {!especial().actions.some( action => action === expression[operacao]) && 
                <Select className="subSections" onSelect={updateExpression} options={props.options} index={set[1]} standard={expression[set[1]]}/>
            }
            {aritmetica().actions.some(action => action === expression[operacao]) 
                && <> = <Input type="number" onChange={updateExpression} index={"equivalencia"} value={expression.equivalencia} /></>}
        </div>
    )

    return (<div>
        <h3>Expressão</h3>
        <ExpressionStyle>
            {renderOperation(["conjunto_a", "conjunto_b"], "operacao1")}
            <div className="conditional">
                {(expression.operacao1 !== "" && !aritmetica().actions.some(action => action === expression.operacao1)) &&
                    <Operation onClick={updateExpression} operations={condition} index={condicional().name} marked={expression.Condicional} />
                }
            </div>
            {(expression.Condicional && expression.Condicional.length) && renderOperation(["conjunto_c", "conjunto_d"], "operacao2")}
            {<Button label={"Calcular"} onClick={SendExpression}/>}
        </ExpressionStyle>

    </div>)
}

export default Expression;