import styled from 'styled-components';
import dark from './../../../../styles/theme/dark'
export const Container = styled.button`
    border: unset;
    background-color: unset;
    cursor: pointer;
    color: ${dark.text};
    transition: all .4s;
    font-size: 1rem;
    padding: .4rem;
    text-transform: uppercase;
    font-weight: bolder;
    
    &:hover{
        color: ${dark.aux}
    }
    


`;
