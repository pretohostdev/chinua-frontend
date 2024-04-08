
import ContactoContent from "../ContactoContent";
import { TitleCategoria } from "../NavCategorias/TitleCategoria";
import { Container } from "./styles";

export const Contacto=()=> {
  return (
    <Container id="contact">
        <TitleCategoria>
           Contacto
        </TitleCategoria>
        <ContactoContent />

    </Container>
  );
}

export default Contacto;