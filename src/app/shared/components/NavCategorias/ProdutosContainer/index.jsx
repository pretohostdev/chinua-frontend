

import { Container } from './styles';

export const ProdutosContainer=(props)=> {
  return (
    <Container>
        {props.children}
    </Container>
  );
}

ProdutosContainer.propTypes;