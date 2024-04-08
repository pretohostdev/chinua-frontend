import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  row-gap: 1rem;
 align-items: center;

 @media screen and (max-width: 960px){
  flex-direction: column-reverse;
}



`;
