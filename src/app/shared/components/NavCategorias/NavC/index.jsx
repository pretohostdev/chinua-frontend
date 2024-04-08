import React from 'react';

import { Container } from './styles';


export const NavC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}
