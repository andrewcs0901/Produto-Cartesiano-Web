import React, { useState } from 'react';
import Select from '../Select/Select';
import Operation from './Operation';
import Input from '../Inputs/Input';
import { aritmetica, logica, especial, condicional } from './OperationsList';
import ExpressionStyle from './ExpressionStyle';
import Button from '../Buttons/Button';
import ListAnswer from '../ListAnswers/listAnswers'

const Expression = (props) => {
    
    const [resultados, setResultados] = useState({})
    const [expression, setExpression] = useState({
        operacao: "",
        type: "",
        operacao1: "",
        operacao2: "",
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

    const SendExpression =  async () => {
        
        let auxExpression = {
            conjunto_a: expression.conjunto_a,
            conjunto_b: expression.conjunto_b
        }
        if (!especial().actions.some(operation => operation === expression.operacao1 || operation === expression.operacao2)) {
            if (expression.equivalencia.length)
                auxExpression.logica = `a${expression.operacao1}b=${expression.equivalencia}`;
            else
                auxExpression.operacao = expression.operacao1
        }
        else {
            auxExpression.logica = {
                "a": expression.operacao1,
                "b": expression.operacao2
            }
        }
        console.log(auxExpression);
      let result = await props.calculate(auxExpression)
      setResultados(result)
    }

    const InputShouldRender = (operationType, operationName) => {
        return operationType().actions
            .some(action => action === expression[operationName])
    }

    const renderOperation = (set, operationName) => (
        <div className="operationSet">
            <Select options={props.options}
                onSelect={updateExpression}
                index={set[0]}
                className="subSections"
                standard={expression[set[0]]} />
            <Operation onClick={updateExpression} operations={onSets} name="subSections" marked={expression[operationName]} index={operationName} />

            {!(InputShouldRender(especial, operationName)
                || InputShouldRender(logica, operationName)
            ) &&
                <Select className="subSections" onSelect={updateExpression} options={props.options} index={set[1]} standard={expression[set[1]]} />
            }
            {InputShouldRender(aritmetica, operationName)
                && <> =
                    <Input type="number" onChange={updateExpression} index={"equivalencia"} value={expression.equivalencia} /></>}
            {
                InputShouldRender(logica, operationName)
                &&
                <Input type="number" onChange={updateExpression} index={set[1]} value={expression.equivalencia} />
            }
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
            {(expression.Condicional
                && expression.Condicional.length
                && !aritmetica().actions.some(action => action === expression.operacao1))
                && renderOperation(["conjunto_b"], "operacao2")}
            {<Button label={"Calcular"} onClick={SendExpression} />}
            {Object.keys(resultados).length > 0 ?<ListAnswer resultados={resultados}/> : <></>}
        </ExpressionStyle>

    </div>)
}

export default Expression;