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
        operacao2: "",
        equivalencia1: "",
        equivalencia2: "",
        conjunto_a: "",
        conjunto_b: "",
        conjunto_x: "",
        conjunto_z: "",
        Condicional: "",
        ready: false
    });

    const onSets = [aritmetica(), logica(), especial()];
    const condition = [condicional()];

    const updateExpression = (value, index, type = expression.type) => {
        console.log(value, index);
        setExpression({
            ...expression, type: type, [index]: value !== "X" ? value : ""
        })
    }

    const isSomeExpression = (expression, operation, operation2, condition) => {
        if (!operation2)
            return expression().actions.some(op => op === operation);
        if (operation2 && expression) {
            if (expression === "||")
                return expression().actions.some(op => op === operation || operation2);
            return expression().actions.some(op => op === operation && op === operation2);
        }
    }

    const buildLogicQuery = (logic, operation, equivalence, letter) => {
        if (isSomeExpression(aritmetica, operation)) {
            if (equivalence.length)
                logic = `a${operation}b=${equivalence}`;
            else
                logic = `a${operation}b`;
        }
        if (isSomeExpression(logica, operation))
            logic = `${letter}${operation}${equivalence}`
        if (isSomeExpression(especial, operation))
            logic = `${letter}=${operation}`;
        return logic;
    }

    const SendExpression = () => {

        const { conjunto_a, conjunto_b, conjunto_x, conjunto_z,
                operacao1, operacao2, 
                equivalencia1, equivalencia2, 
                Condicional } = expression;
        let auxExpression = {
            conjunto_a: conjunto_a,
            conjunto_b: conjunto_b || conjunto_x,
            logica: ""
        }
        auxExpression.logica = buildLogicQuery(auxExpression.logica, operacao1, equivalencia1, "a");
        if (Condicional.length) {
            auxExpression.logica += Condicional + buildLogicQuery(auxExpression.logica, operacao2, equivalencia2, "b");
        }
        console.log(auxExpression)
        props.calculate(auxExpression);
    }

    const InputShouldRender = (operationType, operationName) => {
        return operationType().actions
            .some(action => action === expression[operationName])
    }

    const filterOptions = () => {
        if ((!expression.conjunto_a.length || !expression.conjunto_b.length) &&
            (!expression.conjunto_x.length && !expression.conjunto_z.length))
            return props.options;
        if (expression.conjunto_a === expression.conjunto_b)
            return props.options;
        let option1 = expression.conjunto_a.length ? expression.conjunto_a : expression.conjunto_x.length ? expression.conjunto_x : expression.conjunto_z;
        let option2 = expression.conjunto_b.length ? expression.conjunto_b : expression.conjunto_x.length ? expression.conjunto_x : expression.conjunto_z;
        //console.log(!expression.conjunto_b.length);
        //console.log(expression.conjunto_b);
        return [option1, option2]
    }

    const renderOperation = (set, operationName) => (
        <div className="operationSet">
            <Select options={filterOptions()}
                onSelect={updateExpression}
                index={set[0]}
                className="subSections"
                standard={expression[set[0]]} />
            <Operation onClick={updateExpression} operations={onSets} name="subSections" marked={expression[operationName]} index={operationName} />

            {(expression[set[0]].length > 0 &&
                expression[operationName].length > 0 &&
                InputShouldRender(aritmetica, operationName))
                && <Select className="subSections"
                    onSelect={updateExpression}
                    options={filterOptions()}
                    index={set[1]}
                    standard={expression[set[1]]} />}

            {InputShouldRender(aritmetica, operationName)
                && <> =
                    <Input type="number" onChange={updateExpression} index={set[2]} value={expression[set[2]]} /></>}
            {
                InputShouldRender(logica, operationName)
                &&
                <Input type="number" onChange={updateExpression} index={set[2]} value={expression[set[2]]} />
            }
        </div>
    )

    return (<div className="Expression">
        <h3>Expressão</h3>
        <ExpressionStyle className="Main-Section">
            {renderOperation(["conjunto_a", "conjunto_b", "equivalencia1"], "operacao1")}
            <div className="conditional">
                <Operation onClick={updateExpression} operations={condition} index={condicional().name} marked={expression.Condicional} />
            </div>
            {expression.Condicional.length > 0
                && renderOperation(["conjunto_x", "conjunto_z", "equivalencia2"], "operacao2")}
            {<Button label={"Calcular"} onClick={SendExpression} />}
        </ExpressionStyle>

    </div>)
}

export default Expression;