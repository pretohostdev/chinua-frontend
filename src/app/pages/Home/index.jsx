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
import { CompanyList } from "../../shared/components/CompanyCard/CompanyCard"
import { NewCardCarro} from "../../shared/components/Card/Card"
import { useEffect, useState } from "react"
import { NewCardTerrenoFazenda } from "../../shared/components/Card/CardFazenda"

import { useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"
import { Team } from "../../shared/components/Team/index.jsx"
import { NewCardImovel } from "../../shared/components/Card/CardImovel.jsx"
import { Link } from "react-router-dom"
import { CardMaquina } from "../../shared/components/Card/CardMaquinas.jsx"

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
  const [categoria,setCategoria]=useState("Automóveis");
  const{listaDeCarro,buscarTodosCarros,
    fazendas,buscarTodasAsFazendas,
    imoveis,buscarTodosImoveis,maquinarias,
    buscarTodasMaquinarias
  }=useContext(UserContext)
  

  const listCategoria=[
      {categoria:"Imovel"},
      {categoria:"Terreno"},
      {categoria:"Automóveis"},
      {categoria:"Maquinarias"},
  ]



  useEffect(()=>{
    buscarTodosCarros();
    buscarTodasAsFazendas();
    buscarTodosImoveis()
    buscarTodasMaquinarias()

   
    if(window.location.href.includes("/#Parceiro") ){
      document.querySelector("#Parceiro").scrollIntoView( {behavior: "smooth",
  block: "end",
  inline: "nearest"})
    }


  },[categoria])


  function buscarPorCategora(value){
    setCategoria(value);
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

   
{ /*   <Fade direction="left">
      <Container>
        <Sobre />
      </Container>
    </Fade>
*/}

   
      <Container> 
        <div style={{width:"100%"}} >
        <ContainerTitle>
        <h2   >Nossas intermediações</h2>
        </ContainerTitle>
<div  className="flex justify-center items-center gap-3 mb-6 mt-3 max-md:flex-wrap  " >
      <Link to={"/carros"} className="cursor-pointer  px-8  py-2   rounded-lg  text-white  font-semibold  hover:bg-yellow-500"  style={{background:"tranparent", border:"1px solid #daa520",  }}  >Automóveis</Link>
      <Link to={"/terras"}  className="cursor-pointer  px-8  py-2   rounded-lg  text-white  font-semibold  hover:bg-yellow-500 "  style={{background:"tranparent",border:"1px solid #daa520", }}    >Terrenos </Link>
      <Link to={"/imoveis"}  className="cursor-pointer  px-8  py-2   rounded-lg  text-white  font-semibold  hover:bg-yellow-500"  style={{background:"tranparent",border:"1px solid #daa520", }} >Imoveis </Link>
      <Link to={"#/"}  className="cursor-pointer  px-8  py-2   rounded-lg  text-white  font-semibold  hover:bg-yellow-500"  style={{background:"tranparent",border:"1px solid #daa520", }} >Maquinarias</Link>
      <Link to={"/consultoria"}  className="cursor-pointer  px-8  py-2   rounded-lg  text-white  font-semibold  hover:bg-yellow-500"  style={{background:"tranparent",border:"1px solid #daa520", }} >Consultoria Multidisciplinar</Link>
</div>
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
        categoria==="Terreno"&&  fazendas.map((produto,index)=>(
          <NewCardTerrenoFazenda
            key={index}
            dimensao={produto.dimensao}
            image={`http://127.0.0.1:3000/uploads/fazendas/${produto.image.map(images => images)[0]}`}
            localizacao={produto.localizacao}
            preco={produto.price}
            tipo={produto.tipo}
            id={produto._id}
            status={produto.status}
          />
        ))

      }
      {
       categoria==="Imovel" && imoveis.map((imovel,index)=>(
          <NewCardImovel
          area={imovel.area}
          id={imovel._id}
          image={`http://127.0.0.1:3000/uploads/imoveis/${imovel.image.map(images => images)[0]}`}
          localizacao={imovel.localizacao}
          nomeDoImovel={imovel.nomeDoImovel}
          preco={imovel.preco}
          status={imovel.status}
          tipo={imovel.tipo}
          key={imovel._id}
          
          />
        ))
      }
      {
       categoria ==="Automóveis" && listaDeCarro.map((car,index)=>(
          <NewCardCarro
          image={`https://api-chinua.onrender.com/uploads/carros/${car.image.map(images => images)[0]}`}
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
      {
        categoria==="Maquinarias" && maquinarias.map((maquina,index)=>(
          <CardMaquina
            estadoDeConversao={maquina.estadoDeConversao}
            id={maquina._id}
            image={`http://127.0.0.1:3000/uploads/maquinas/${maquina.image.map(images => images)[0]}`}
            nomeDaMaquinaria={maquina.nomeDaMaquinaria}
            price={maquina.price}
            status={maquina.status}
            tipoCombustivel={maquina.tipoCombustivel}
            tipoDeMaquinaria={maquina.tipoDeMaquinaria}
            tipoDefreio={maquina.tipoDefreio}
            tipoMotor={maquina.tipoMotor}
            key={maquina._id}
            
          />
        ))
      }
        
 
</Carousel>
        </div>
        
      </Container>

    
     
        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >

        <ContainerTitle>
        <h2  style={{textAlign:"center"}}   >Outros sectores da Chinua Ndembo</h2>
        </ContainerTitle>
   
        <CompanyList/>
        </div>
     

          

    <Container>
      <div  id="about" className="container">
        <Services   />
      </div>
    </Container>
    
    <Fade cascade>
      <Container>
        <Galeria />
      </Container>
    </Fade>
      <Container  id="Parceiro" >
        <Partener/>
      </Container>
 


    <Container>
    <Team/>
    </Container>

    <Container>
      <div className="container">
        <Contacto />
      </div>
    </Container>
    

    
    
    
  </>
}
