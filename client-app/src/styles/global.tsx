import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400');
    *{
        margin:0;
        padding:0;
    }

    html, body{
        padding: 0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Lato', 'Arial', 'sans-serrif';
        font-size: 16px;
        text-rendering: optimizeLegibility;
        letter-spacing:1px;
        font-weight: 300;
        background-color: #e6ebe7;
    }

    button{
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
`