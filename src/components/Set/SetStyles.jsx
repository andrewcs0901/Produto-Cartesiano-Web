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