
// import { Container } from './styles';

import { Link, NavLink } from "react-router-dom";
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
          
          <a href="https://maps.app.goo.gl/Siq9GiU4DMNLL9Ud9" target="_blank"  >Escritório</a>
          
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
  <ListItem>
  <NavLink target="#Parceiro" to="/" children  >
            <a   href="#sobre" target="#Parceiro"  >Sobre</a>
          </NavLink>
  </ListItem>
    </LinkA>
        </ListItem> 

        <ListItem>
          <NavLink target="/#Parceiro" to="/" children  >
            <a   href="#Parceiro" target="#Parceiro"  >Parceiro</a>
          </NavLink>
       
        </ListItem> 
        <ListItem>
        <NavLink target="#Parceiro" to="/" children  >
            <a   href="#contact" target="_self"  >Contacto</a>
          </NavLink>
         
        </ListItem> 
        <ListItem >
            <a href={` https://wa.me/+244923845779`} target="_blank" >+244 923 845 779</a>
        </ListItem> 
        
    </Container>
  );
}

Nav.propTypes
