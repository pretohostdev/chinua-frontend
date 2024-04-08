import styled from 'styled-components';
import dark from '../../styles/theme/dark';

export const Container = styled.a`
        width: 30px;
        height: 2px;
        border-radius: 5px;
        background-color: ${dark.text};
        &:hover {
        background-color: ${dark.aux};
        }

        @media screen and (max-width: 600px){
                width: 25px;
        }
        @media screen and (max-width: 490px){
            width: 20px;
        }
    
`;
