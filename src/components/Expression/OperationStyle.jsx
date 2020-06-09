import styled from 'styled-components';

const OperationStyle = styled.div`
display: flex;
flex-wrap: wrap;
font-size: 1.5em;
div{
    width: 100%;
}
button{
    background-color: white;
    width: 35%;
    border: 1px solid black;
    margin: 1% auto;
    border-radius: 7px;
    font-size: 0.8em;
    font-weight: 700;
    transition: 300ms;
    :hover{
        background-color: #252525;
        color: white;
    }
}
button.active{
    background-color: blue;
    color: white
}
`

export default OperationStyle;