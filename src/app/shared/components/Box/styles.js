import styled from 'styled-components';
import dark from './../../styles/theme/dark'
export const Container = styled.div`
    width: 180px;
    height: 350px;
    background-color: transpart;
    border-width: 8px;
    border-style: solid;
    border-color: ${dark.aux} transparent  ${dark.aux} ${dark.aux};
    position: relative;
    z-index: 4;

    &::before{
        position: absolute;
        content: '';
        right:-8px;
        top: -8px;
        height: 50px;
        width: 8px;
        background-color: ${dark.aux};
        z-index: 19;
     }
    &::after{
        position: absolute;
        content: '';
        right:-8px;
        bottom: -8px;
        height: 50px;
        width: 8px;
        background-color: ${dark.aux};
        z-index: 24;
     }
     @media screen and (max-width: 960px){
        width: 200px;
    }
    @media screen and (max-width: 600px){
       width: 220px;
    }
    @media screen and (max-width: 490px){
       width: 180px;
       transform: translateX(-40px);
    }
    
`;
