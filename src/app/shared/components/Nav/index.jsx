
// import { Container } from './styles';

import { Link, NavLink, Navigate,useNavigate } from "react-router-dom";

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
import { useRef } from "react";

export const Nav=(props)=> {


  const navigate=useNavigate()


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
      <a   href="#about" target="#about" onClick={(e)=>{
        e.preventDefault()
        navigate("/#about",{relative:"route",preventScrollReset:true,state:{},replace:false})
        document.querySelector("#about").scrollIntoView(true,{})
      }}   >Sobre</a>
  </ListItem>
    </LinkA>
        </ListItem> 
        <ListItem>
          <LinkA
          to="Parceiro"
          activeClass="active"
          spy={true}
          >
            <a   href="#Parceiro" target="#Parceiro"  
            
            onClick={(e)=>{
              e.preventDefault()
              navigate("/#Parceiro",{relative:"route",preventScrollReset:true,state:{},replace:false})
              document.querySelector("#Parceiro").scrollIntoView(true,{})
            }}
            >Parceiro</a>
          </LinkA>
        </ListItem> 
        <ListItem>
            <a   href="#contact"   target="#contact"  onClick={(e)=>{
                e.preventDefault()
                document.querySelector("#contact").scrollIntoView(true,{})
                scroll.scrollToBottom(1,{})
              }}  >Contacto</a>
        </ListItem> 
        <ListItem >
            <a href={` https://wa.me/+244923845779`}    target="_blank" >+244 923 845 779</a>
        </ListItem> 
        
    </Container>
  );
}

Nav.propTypes
