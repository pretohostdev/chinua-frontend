import styled from "styled-components"
import { Container, ContainerTitle,ContainerFiltro } from "./styles"
import { Icons } from "../../shared/components/Icons"
import { CiteContainer } from "../../shared/components/CiteContainer"

import { Services } from "../../shared/components/Services"
import Contacto from "../../shared/components/Contacto"
import { Sobre } from "../../shared/components/Sobre"

import Galeria from "../../shared/components/Galeria"
import Carousel from "react-multi-carousel";
import { Fade } from "react-awesome-reveal"
import { NavBar } from "../../shared/components/NavBar"
import { Partener } from "../Partener"
import { Link, animateScroll as scroll } from "react-scroll";
import { CompanyList } from "../../shared/components/CompanyCard/CompanyCard"
import { NewCardCarro} from "../../shared/components/Card/Card"
import { useEffect, useState } from "react"
import { NewCardTerrenoFazenda } from "../../shared/components/Card/CardFazenda"

import { useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"
import { Team } from "../../shared/components/Team/index.jsx"

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
  const{listaDeCarro,buscarTodosCarros}=useContext(UserContext)
  
  const listCategoria=[
      {categoria:""},
      {categoria:"Fazenda"},
      {categoria:"Casa"},
      {categoria:"Terreno"},
      {categoria:"Carro"},
  ]


  useEffect(()=>{
    buscarTodosCarros()
  })



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
         return (listaDeCarro.map((car,index)=>(
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
        listaDeCarro.map((car,index)=>(
          <NewCardCarro
          image={car.image}
          nomeDoCarro={car.nomeDoCarro}
          price={car.price}
          tipoCombustivel={car.tipoCombustivel}
          tipoDefreio={car.tipoDefreio}
          tipoMotor={car.tipoMotor}
          key={index}
          id={car._id}
          status={car.status}
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
    
        <Link to={"/carros"} >
        <button className="button-link  p-2 bg-gray-500 text-white rounded-lg ">
        Carros
        </button>
        </Link>
      <Link>Fazenda e Terreno </Link>
      

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

<Team/>

    <Container>
      <div className="container">
        <Contacto />
      </div>
    </Container>

    
  </>
}
