import React from 'react'
import { ListContainer } from './styles'

const letters = [
  "A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "V", "W","X", "Y", "Z"
];
export default function ListAnswers(props) {

  return(
    <ListContainer>
      <h2>Respostas: </h2>
      {props.resultados && <ul>        
        <li key={props.resultados.modulo_conjunto_universo+'1'}> U =  [{props.resultados.conjunto_universo.map(result =>{
          return (<>{ "("+ result[0]+ ",  "} {result[1] + ") "}</>)
        })}] |U| = {props.resultados.modulo_conjunto_universo}</li>
        <li key={props.resultados.modulo_resposta+'8'}> {letters[props.resultados.modulo_resposta] + " ="}  [{props.resultados.resposta.map(result =>{
          return (<>{ "("+ result[0]+ ",  "} {result[1] + ") "}</>)
        })}] { "|"+ letters[props.resultados.modulo_resposta]+ "| = " + props.resultados.modulo_resposta} </li>
      </ul>}
    </ListContainer>
  )
}