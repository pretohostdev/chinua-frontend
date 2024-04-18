
// import { Container } from './styles';

import { Link } from "react-router-dom";
import { ListItem } from "../ListItem";
import { Container } from "./styles";

export const Nav=(props)=> {
  return (
    <Container className={props.propClass}>
        <ListItem>
          <Link>Ínicio</Link>
        </ListItem> 
        
        <ListItem>
          <Link>Escritório</Link>
        </ListItem> 
        <ListItem>
        <a href="#about" >Sobre</a>
        </ListItem> 
        
        <ListItem>
          <Link>O que falam</Link>
        </ListItem> 
        <ListItem>
          <Link to="/partner">Parceiro</Link>
        </ListItem> 
        <ListItem>
          <a href="#contact">Contacto</a>
        </ListItem> 
        <ListItem >
          <Link id='contacto'>+244 923 000 000</Link>
        </ListItem> 
        
    </Container>
  );
}

Nav.propTypes
