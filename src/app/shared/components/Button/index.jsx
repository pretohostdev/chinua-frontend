
import { Container } from './styles';

export const Button = (props) => {
  return (
    <Container theme={props.theme} onClick={props.onClick}>
      {props.children}
    </Container>
  )
}

Button.propTypes
