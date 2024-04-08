import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content:space-between;
     
    column-gap: .8rem;

    button{
        padding: .4rem .2rem;
    }

    @media screen and (max-width: 960px){
        flex-flow: row wrap;
        gap: .4rem;
        justify-content: space-around;
    }

   
    
`;
