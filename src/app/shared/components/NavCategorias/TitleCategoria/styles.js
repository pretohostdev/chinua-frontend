import styled from 'styled-components';
import dark from '../../../styles/theme/dark';

export const Container = styled.h4`
    color: ${dark.text};
    font-size: 1.2rem;
    font-weight: normal;
    width: 100%;
    text-align: left;
    margin: 2rem auto;
    font-weight: bolder;
    text-transform: uppercase;
    color:   ${dark.aux};
    @media screen and (max-width: 1200px){
        text-align: center;
    }
   
`;
