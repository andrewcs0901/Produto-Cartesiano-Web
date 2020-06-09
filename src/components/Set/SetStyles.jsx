import styled from 'styled-components';

const SetStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 2%;


    div.set-box{
        border: 1px solid;
        padding: 1%;
        border-radius: 10px;
        box-shadow: 1px 1px 12px #00000042;
        margin: 1%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    div.set-delete{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        span.delete-action{
            background-color: red;
            color: white;
            border-radius: 56%;
            font-family: monospace;
            width: 1.2em;
            text-align: center;
            height: 1.1em;
            border: 1px solid #8a8a8a;
            transition: 800ms;
            transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
            :hover{
                cursor: pointer;
                box-shadow: 1px 1px 9px #565656;
                font-size: 1.1em;
            }
        }

    }
    div.set-view{
        display: flex;
        font-size: 2em;
        div.set-brackets{
            margin-bottom: 2%;
            font-size: 1.5em;
        }
        div.set-elements{
            display: flex;
            flex-direction: row;
        }
        div.set-element{
            display: flex;
            font-size: 0.6em;
            height: fit-content;
            margin: auto;
        }
        span.comma{
            font-weight: bold;
            font-size: 1.1em;
        }
    }

`

export default SetStyles;