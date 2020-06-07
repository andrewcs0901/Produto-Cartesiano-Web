import styled from 'styled-components';

const ElementStyle = styled.div`
        border: 1px solid black;
        padding: 0.05em;
        border-radius: 9%;
        font-weight: 700;
        display: flex;
        width: min-content;

        div.removeSet{
            cursor: pointer;
            color: #fff;
            font-size: 0.6em;
            border-radius: 50%;
            font-family: monospace;
            width: 1em;
            text-align: center;
            margin: auto;
            background-color: #a80000;

        }
    `
export default ElementStyle;