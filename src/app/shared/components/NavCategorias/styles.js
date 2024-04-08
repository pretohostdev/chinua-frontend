import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items-center;
  justify-content: space-between;
  margin: 2rem auto;
   

  @media screen and (max-width: 1200px){
      &:first-child{
        flex-direction: column;
      }
  }
`;
