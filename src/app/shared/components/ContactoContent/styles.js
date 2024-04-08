import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 3rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  
  @media screen and (max-width: 960px){
    flex-direction: column-reverse;
    row-gap: 1.6rem;
  }
  // @media screen and (max-width: 600px){
  //     left: 25%;
  //     top: 30%;
  //     font-size: 2.6rem;
  //     transform: translateY(-30%);
  // }
  // @media screen and (max-width: 490px){
  //     left: 12%;
  //     top: 30%;
  //     font-size: 1.6rem;
  //     transform: translateY(-30%);
  // }
`;

