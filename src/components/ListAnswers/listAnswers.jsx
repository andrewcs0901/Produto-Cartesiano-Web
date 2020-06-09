import React, { useState, useEffect, } from 'react'
import { ListContainer } from './styles'

const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"
];
export default function ListAnswers(props) {

  const [index, setState] = useState(0)
  const [results, setResults] = useState([])

  const { sucess } = props.resultados;

  useEffect(() => {
    if (sucess) {
      setState(index + 1);
      setResults([...results, props.resultados]);
    }
  }, [props, sucess])



  return (

    <ListContainer>
      <h2>Respostas: </h2>
      {(results.length > 0) ? results.map((results,index) => (
        <ul>
          <li key={`modulo universo - ${letters[index]}`}> U =  [{results.conjunto_universo.map(result => {
            return (<span key={`Universo - ${result[0]}-${result[1]}`}>{"(" + result[0] + ",  "} {result[1] + ") "}</span>)
          })}] |U| = {results.modulo_conjunto_universo}</li>
          <li key={`modulo resposta - ${letters[index]}`}> {letters[index] + " ="}  [{results.resposta.map(result => {
            return (<span key={`Resposta - ${result[0]}-${result[1]}`}>{"(" + result[0] + ",  "} {result[1] + ") "}</span>)
          })}] {"|" + letters[index] + "| = " + results.modulo_resposta} </li>
        </ul>
      ))
        : <div></div>
      }
    </ListContainer>
  )
}