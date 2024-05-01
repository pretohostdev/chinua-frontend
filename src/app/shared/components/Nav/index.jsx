
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
          <NavLink target="#Parceiro" to="/" children  >
            <a   href="/#Parceiro" target="#Parceiro"  >Parceiro</a>
          </NavLink>
       
        </ListItem> 
        <ListItem>
        <NavLink target="#Parceiro" to="/" children  >
            <a   href="/#contact" target="#Parceiro"  >Contacto</a>
          </NavLink>
         
        </ListItem> 
        <ListItem >
    
            <a href={`https://api.whatsapp.com/send?phone=+244923000143&text=Olá!`}  target="_blank" >+244 923 000 000</a>
     
        </ListItem> 
        
    </Container>
  );
}

Nav.propTypes
