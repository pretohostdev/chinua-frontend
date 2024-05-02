
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
          
          <a href="https://www.google.com/maps/place/PETROHOST,+LDA/@-8.8988882,13.207865,17.12z/data=!4m10!1m2!2m1!1spetrohost!3m6!1s0x1a51f783eef1fd19:0xf7df4316070ec55!8m2!3d-8.8988355!4d13.2116599!15sCglwZXRyb2hvc3RaCyIJcGV0cm9ob3N0kgETd2ViX2hvc3Rpbmdfc2VydmljZeABAA!16s%2Fg%2F11t1sjw09q?entry=ttu" target="_blank"  >Escritório</a>
          
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
  <ListItem   >
    Sobre
  </ListItem>
</LinkA>
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
    
            <a href={`https://api.whatsapp.com/send?phone=+24939593385&text=Olá!`} target="_blank" >+244 939 593 385</a>

        </ListItem> 
        
    </Container>
  );
}

Nav.propTypes
