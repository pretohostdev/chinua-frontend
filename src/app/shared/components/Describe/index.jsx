import styled from "styled-components";
import { Container } from "./styles";
import Constroi from './../../../../assets/img/constroi.png';
import Repair from './../../../../assets/img/repair.png';
import Taxi from './../../../../assets/img/taxi.png';
import Img from './../../../../assets/img/cadeiras.jpg';
import Parts from './../../../../assets/img/parts.png';
import dark from "../../styles/theme/dark";
import { Fade } from "react-awesome-reveal";


const StyleContent = styled.div`
    width: 40%;
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
    padding: 1rem .8rem;
    color: ${dark.text};
    font-weight: normal;

    @media screen and (max-width: 960px){
      width: 100%;
      img{
        transform: unset;
      }
    }
    .imagem{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 70px;

        @media screen and (max-width: 480px){
          width: 50px;
        }
    }
  }
    h4{
      font-weight: 300!important;
      font-size: 1.6rem;
      color: ${dark.aux};
    }

    p{
      font-weight: 200;
    }
      margin: 0 auto;
    `

const ContentDescribe = () => {
  return <StyleContent>
    <h4>Visão</h4>
    <p>Nossa visão é ser líder no mercado de intermediação de negócios, reconhecida pelo comprometimento em oferecer soluções inovadoras e de alta qualidade para nossos clientes. Pretendemos continuar expandindo nossos negócios e expertise, aprimorando nossos serviços e tecnologia, e proporcionando uma ambiente de trabalho positivo e inspirador para nossos funcioários.</p>
    <h4>Valores</h4>
    <p>Comprometimento: nos dedicamos a facilitar negócios bem-sucedidos, conectando compradores e vendedores com eficiência e eficácia.</p>

    <div className="imagem">
      <img src={Constroi} alt="Construção" />
      <img src={Repair} alt="Reparação" />
      <img src={Taxi} alt="Táxi" />
      <img src={Parts} alt="Parts" />
    </div>
  </StyleContent>

}


const StyleImage = styled.div`
  width: 40%;
  margin-left: 4rem;
  img {
    transform: translate(-40px, -60px);
    height: 450px;

  
  }

  @media screen and (max-width: 960px){
    width: 100%;
    img{
      transform: unset;
    }

    margin: 0 auto;

    

  }
  

`

const Image = () => {
  return (
    <StyleImage>
      <img src={Img} alt="" />
    </StyleImage>
  )
}


function Describe() {
  return (
    <Fade direction="right">
      <Container>

        <ContentDescribe />
        <Image />
      </Container>
    </Fade>
  );
}

export default Describe;