import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 960px){
        flex-direction: column;
      }
     
`;
