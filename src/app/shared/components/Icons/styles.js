import styled from "styled-components";
import dark from "../../styles/theme/dark";


export const Container = styled.div`
    display:flex;
    width: 4%;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: .9rem .2rem;
    row-gap:  3rem;
    justify-content: flex-start;
     
    svg{
        color: ${dark.text};
        font-size: 2rem;
        transition: all .4s;
        border-radius: 5px;
        padding: .4rem;
        &:hover{
            color: ${dark.aux};
            background-color: ${dark.text};
        }  
    }
` 