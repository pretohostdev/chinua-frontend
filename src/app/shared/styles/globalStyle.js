import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    ul{
        list-style: none;
    }
    a,a:link,a:active{
        text-decoration: none;
    }
    html{

        width: 100%;
        font-size: 100%;
        overflow-x: hidden;
        body{
            width: 100%;
            display:flex;
            flex-direction: column;
            background-color: ${props => props.theme.background};
            color: ${props => props.theme.color};
            overflow-x:hidden;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .container{
        width: 100%;
        max-width: 90vw;
        margin: 0 auto;
        
    }
`