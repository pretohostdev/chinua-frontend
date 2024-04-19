import styled from "styled-components"
import { Container, Footer } from "./styles"
import { Icons } from "../../shared/components/Icons"
import { CiteContainer } from "../../shared/components/CiteContainer"
import { NavCategorias } from "../../shared/components/NavCategorias"
import { Services } from "../../shared/components/Services"
import Contacto from "../../shared/components/Contacto"
import { Sobre } from "../../shared/components/Sobre"
import FooterContainer from "../../shared/components/FooterContainer"
import Galeria from "../../shared/components/Galeria"

import { Fade } from "react-awesome-reveal"
import { NavBar } from "../../shared/components/NavBar"
import { Partener } from "../Partener"

import { Link, animateScroll as scroll } from "react-scroll";
import { CompanyList } from "../../shared/components/CompanyCard/CompanyCard"

const StyleHome = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  column-gap: 4rem;
  // position: relative;
  padding: 4rem auto;
  overflow: hidden;
  // height: calc(100vh - 15rem);
  


`

export const Home = () => {
  return <>
  <NavBar />
    <Fade  >
      <Container first="true">
        <div className="container">
          <StyleHome>
            <Icons />
            <CiteContainer />
          </StyleHome>
        </div>
      </Container>
    </Fade>

    <Fade direction="top-left">
      <Container>
          <CompanyList/>
      </Container>
    </Fade>
    <Fade direction="left">
      <Container>
        <Sobre />
      </Container>
    </Fade>
    <Fade direction="left">

      <Container back="true">
        <div className="container">
          <NavCategorias />
        </div>
      </Container>
    </Fade>
    
    <Container>
      <div className="container">
        <Services />
      </div>
    </Container>
    
    <Fade cascade>
      <Container>
        <Galeria />
      </Container>
    </Fade>



  

<scroll>

    <Fade cascade>
      <Container  id="Parceiro" >
        <Partener/>
      </Container>
    </Fade>
</scroll>

    <Container>
      <div className="container">
        <Contacto />
      </div>
    </Container>

    
  </>
}
