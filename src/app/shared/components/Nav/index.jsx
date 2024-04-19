
// import { Container } from './styles';

import { Link } from "react-router-dom";
import { Link as LinkA, animateScroll as scroll } from "react-scroll";

<Link
  activeClass="active"
  to="about"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Sobre
</Link>
import { ListItem } from "../ListItem";
import { Container } from "./styles";

export const Nav=(props)=> {
  return (
    <Container className={props.propClass}>
        <ListItem>
          <Link to={"/"}>Ínicio</Link>
        </ListItem> 
        
        <ListItem>
          <Link>Escritório</Link>
        </ListItem> 
        <ListItem>
        <LinkA
  activeClass="active"
  to="about"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Sobre
</LinkA>
        </ListItem> 
        
        <ListItem>
          <a href="#oquefalam">O que falam</a>
        </ListItem> 
        <ListItem>
          <Link target="#Parceiro" to="/" children>
            <a   href="#Parceiro">Parceiro</a>
          </Link>
       
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
