import styled from "styled-components";
import dark from "../../styles/theme/dark";



export const Container = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
   
    
    @media screen and (max-width: 1200px){
        position: absolute;
        height: auto;
        overflow: hidden;
        flex-flow: column;
        padding: 0!important;
        top: -2vh;
        padding-top: 6rem!important;
        transform: translateX(100vw);
        width: 38vw;
        height: 100vh;
        justify-content: space-between;
        background-color: rgba(0,0,0,.9);
        border-left: unset!important;
        box-shadow: 1px 1px 20px rgba(255,255,255,0.125), 1px 1px 4px ${dark.aux} ;
        border-radius: 1px;
        z-index: 100;
        transition: 400ms ease-in;
        
        
        
        li{
            width: 100%;
            padding: 0!important;
            
            a{
    
                width: 100%;
                display: flex;
                justify-content: center;
                padding: .8rem!important;
                
            }
        }
    }

   
    @media screen and (max-width: 600px){
        width: 60vw;
    }
    @media screen and (max-width: 490px){
        width: 90vw;
  
    }
   
`