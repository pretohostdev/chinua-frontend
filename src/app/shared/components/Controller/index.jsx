
import { Container } from './styles';

export const Controller = (props) => {
  return (
    <Container onClick={()=>props.setValue(props.pos)}></Container>
  );
}
Controller.propTypes
