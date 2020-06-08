import styled from 'styled-components';

const OperationStyle = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        div.operationSet{
            display: flex;
            flex-direction: row;
            width: 40%;
            border: 1px solid black;
            padding: 1%;
            div.subSections{
                display: flex;
                width: 33%;
                flex-direction: column;
            }
        }
        div.conditional{
            display: flex;
            flex-direction: row;
            width: 10%;
            padding: 5%
        }
        > button{
            height: 2em;
            margin: 10%;
        }
    `

export default OperationStyle