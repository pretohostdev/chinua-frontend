
import Endereco from '../Endereco';
import FormContacto from '../FormContacto';
import { Container } from './styles';

function ContactoContent() {
  return (
    <Container>
        <FormContacto />
        <Endereco />
    </Container>
  );
}

export default ContactoContent;