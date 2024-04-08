import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    margin: 0 auto:
    display: flex;
    margin: 1rem auto;
    background-color: transparent;
    position: relative;
    top: 0;
    z-index: 10;

    .container{
        display: flex;
        align-items: center;
        column-gap: 8rem;
        margin: .4rem auto;
        background-color: transparent;
        justify-content: space-between;
    }

    .nav__bar__active{
        transform: translateX(60vw);
        
        @media screen and (max-width: 968px){
            transform: translateX(60vw);
        }
        @media screen and (max-width: 600px){
            transform: translateX(35vw);
        }
        @media screen and (max-width: 490px){
            transform: translateX(0vw);
      
        }
    }

    .toggle{
        .line1{
            transform: rotate(-45deg) translate(-20px, 5px);
        }
        .line2{
         opacity: 0;
        }
        .line3{
            transform: rotate(45deg) translate(-16px, -3px);
        }
    }

    
`