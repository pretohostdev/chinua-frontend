import styled from "styled-components"
import { Container, ContainerTitle,ContainerFiltro,Footer,ListProduto,ContainerButtonProduto } from "./styles"
import { Icons } from "../../shared/components/Icons"
import { CiteContainer } from "../../shared/components/CiteContainer"
import { NavCategorias } from "../../shared/components/NavCategorias"
import { Services } from "../../shared/components/Services"
import Contacto from "../../shared/components/Contacto"
import { Sobre } from "../../shared/components/Sobre"
import FooterContainer from "../../shared/components/FooterContainer"
import Galeria from "../../shared/components/Galeria"
import Carousel from "react-multi-carousel";
import { Fade } from "react-awesome-reveal"
import { NavBar } from "../../shared/components/NavBar"
import { Partener } from "../Partener"
import { Link, animateScroll as scroll } from "react-scroll";
import { CompanyList } from "../../shared/components/CompanyCard/CompanyCard"
import { NewCardCarro} from "../../shared/components/Card/Card"
import { useState } from "react"
import { NewCardTerrenoFazenda } from "../../shared/components/Card/CardFazenda"
import PageCarro from "../Carro/index.jsx";

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
  const [categoria,setCategoria]=useState();

  
  const listCategoria=[
      {categoria:""},
      {categoria:"Fazenda"},
      {categoria:"Casa"},
      {categoria:"Terreno"},
      {categoria:"Carro"},
  ]


  const ListDeCarros=[
    {nomeDoCarro:"Mercedes Benz",price:"299.00",image:"https://i.pinimg.com/originals/8a/53/ea/8a53ea3bd257644431fd808e548b2707.jpg",tipoDefreio:"ABS e o ESP",tipoMotor:"V12 Engine",tipoCombustivel:"Diesel"},
    {nomeDoCarro:"Land Cruiser",price:"259.99",image:"https://i.pinimg.com/originals/39/d7/9d/39d79d25498c93dffba29a542d550051.jpg",tipoDefreio:"ABS e o ESP",tipoMotor:"V8 Engine",tipoCombustivel:"Diesel"},
    {nomeDoCarro:"Jeetur",price:"159.99",image:"https://www.simplycarbuyers.com/blog/wp-content/uploads/2023/01/70-1170x669-2.png",tipoDefreio:"ABS e o ESP",tipoMotor:"V6",tipoCombustivel:"Diesel"},
    {nomeDoCarro:"Haval H6",price:"299.00",image:"https://s0.rbk.ru/v6_top_pics/media/img/9/22/755941158460229.jpg",tipoDefreio:"ABS e o ESP",tipoMotor:"V6",tipoCombustivel:"Diesel"},
    {nomeDoCarro:"Land Cruiser Town Turbo",price:"299.00",image:"http://images.summitmedia-digital.com/topgear/images/2021/07/22/lc300-6-1626947643.jpg",tipoDefreio:"ABS e o ESP",tipoMotor:"V12 Engine",tipoCombustivel:"Diesel"},

  ]

  const ListDeFazendaTerreno=[
    {localizacao:"Luanda",dimensao:"2000x900",preco:"1599",tipo:"Fazendo",image:"https://www.kotas.com.br/blog/wp-content/uploads/2023/09/a-fazenda-playplus.jpg"},
    {localizacao:"Bengo",dimensao:"14x13",preco:"1399",tipo:"Fazendo",image:"https://get.wallhere.com/photo/1920x1080-px-barn-clouds-crop-farm-fields-grass-landscapes-Rustic-sky-1690913.jpg"},
    {localizacao:"Cacuaco",dimensao:"14x13",preco:"1299",tipo:"Fazendo",image:"https://www.coffeemaxgreen.com/wp-content/uploads/2019/12/INSTITUCIONAL-MCMIAKI-COFFEE-191.jpg"},
    {localizacao:"Zango",dimensao:"14x13",preco:"1500",tipo:"Terrono",image:"https://www.coffeemaxgreen.com/wp-content/uploads/2019/12/INSTITUCIONAL-MCMIAKI-COFFEE-191.jpg"},
    {localizacao:"Huambo",dimensao:"50x50",preco:"1299",tipo:"Terreno",image:"https://www.coffeemaxgreen.com/wp-content/uploads/2019/12/INSTITUCIONAL-MCMIAKI-COFFEE-191.jpg"},

  ]
  function buscarPorCategora(value){
    setCategoria(value);
  }


  const Produto=(categoria)=>{
      switch (categoria){
        case "1":{
         return (ListDeCarros.map((car,index)=>(
            <NewCardCarro
            key={index}
            image={car.image}
            nomeDoCarro={car.nomeDoCarro}
            price={car.price}
            tipoCombustivel={car.tipoCombustivel}
            tipoDefreio={car.tipoDefreio}
            tipoMotor={car.tipoMotor}
            />
          )))
        }

      }


  }


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
      <Container>
        <div style={{width:"100%"}} >
        <ContainerTitle>
        <h2 >Nossos produtos</h2>
        </ContainerTitle>
        <ContainerFiltro>
          Filtro
          <select value={categoria}  onChange={(e)=>buscarPorCategora(e.target.value)} >
           {listCategoria.map(categoria=><option value={categoria.categoria} >{categoria.categoria}</option>)}
          </select>
        </ContainerFiltro>
  <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass=""
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktoplite: {
      breakpoint: {
        max: 1920,
        min: 800
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>


      {
        ListDeFazendaTerreno.map((produto,index)=>(
          <NewCardTerrenoFazenda
            key={index}
            dimensao={produto.dimensao}
            image={produto.image}
            localizacao={produto.localizacao}
            preco={produto.preco}
            tipo={produto.tipo}

          />
        ))

      }
      {
        ListDeCarros.map((car,index)=>(
          <NewCardCarro
          image={car.image}
          nomeDoCarro={car.nomeDoCarro}
          price={car.price}
          tipoCombustivel={car.tipoCombustivel}
          tipoDefreio={car.tipoDefreio}
          tipoMotor={car.tipoMotor}
          key={index}
          />
        ))
      }
        
 
</Carousel>
       {/* <ContainerButtonProduto>
          <div>
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
</ContainerButtonProduto>*/}
        </div>
        
      </Container>
    </Fade>
    
  <PageCarro/>
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
