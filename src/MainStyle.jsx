import styled from 'styled-components';

const MainStyle = styled.div`
        padding: 1%;

        main{
            padding: 1%;
            border: 1px solid black;
            border-radius: 7px;
            box-shadow: 1px 0px 16px #00000042;

            h3{
                text-align: center;
                font-size: 2em;
                margin: 0;
            }

            div.add-set > button{
                border-radius: 5px;
                border: 1px solid;
                padding: 0.5em;
                font-weight: 900;
                color: green;
                transition: 300ms;

                :hover{
                    color: #0f3a02;
                    box-shadow: 1px 1px 7px #00000085;
                }
            }
        }

`

export default MainStyle;