import styled from 'styled-components';

const OperationStyle = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        text-align: center;
        div.operationSet{
            display: flex;
            flex-direction: row;
            width: 40%;
            border: 1px solid black;
            padding: 1%;
            div.subSections{
                display: flex;
                width: 25%;
                flex-direction: column;
                margin: auto;
                select{
                    width: 80%;
                    font-size: 1.5em;
                    text-align-last: center;
                    border-radius: 2px;
                }
                input{
                    font-size: 1.6em;
                    width: 70%;
                }
                span.equal-symbol{
                    font-size: 1.6em;
                }
            }
            div.input-expression{
                flex-direction: row
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
            margin: auto 2%;
            background-color: green;
            color: white;
            font-weight: 900;
            border: none;
            padding: 1%;
            display: flex;
            justify-content: center;
            align-items: center;
            :active{
                cursor: pointer;
                box-shadow: 1px 1px 10px black;
            }
            :disabled{
                background-color: gray
            }
        }
    `

export default OperationStyle