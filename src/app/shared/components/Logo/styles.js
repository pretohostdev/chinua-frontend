import styled from "styled-components";
import dark from "../../styles/theme/dark";

export const Container = styled.div`
       position: relative;
       padding: .5rem;
       border-radius: 10px;
       width: calc(100px - 1rem);
       height: calc(100px - 1rem);

       @media screen and (max-width: 968px){
      
        width: calc(100px - 2.2rem);
        height: calc(100px - 2.2rem);
       }
       
       
       a{
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${dark.background};
        
        h1{
            width: 100%;
            height: 100%;

            display: flex;
            align-items:center;
            justify-content: center;
        }
        img{
            width:  90%;
            height: 80%;        
        }
       }
       .ghost{
        position: absolute;
        width: 100px;
        height: 180px;
        background-color:    ${dark.aux};
        z-index: 1;
        top: -50px;
        left: -50px;
       }

`