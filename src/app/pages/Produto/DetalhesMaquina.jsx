import { useParams } from "react-router-dom";
import {ContainerFazerPedido,ContainerTipoPecas,ContainerParteDeBaixo} from "./style"
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import api from "../../core/api";
import { NavBar } from "../../shared/components/NavBar";
import { Container } from "../Home/styles";
import Contacto from "../../shared/components/Contacto";
import FormatarMoeda from "../../shared/utils/formatarMoeda";
import ChinuaNdemboBanerInfo from "../../shared/components/cardInfo";

export default function MaquinaDetails() {
  const [produto,setProduto]=useState({})
  const [listaImage,setListaImage]=useState([])
  const {IDproduto}=useParams()


  const message=`
  Olá, estou interessado em *comprar/alugar* um carro da Chinua, 
  especificamente o modelo Marca: *${produto.nomeDoCarro}* com referência: *${IDproduto}*.

  Gostaria de saber mais detalhes sobre disponibilidade e condições.Agradeço desde já pela atenção.
  `
  async function buscarProduto(IDproduto){
    await api.get(`/maquinaria/listar/${IDproduto}`)
    .then(async (response)=>{
        const maquina= await response.data
        const images= await maquina.image.map(img=>img)
        setProduto(()=>maquina)
        setListaImage(()=>images)
      
        
      })
      
  }

  
  useEffect(()=>{
    buscarProduto(IDproduto)
    console.log(listaImage)
  },[])

  return (
    <>
    <NavBar/>
 
 <Container>

 <div   
      style={{
        width:"70%",
        display:"flex",
        justifyContent:"center",
        
        flexDirection:"row",
        paddingLeft:14,
        paddingRight:14,
        gap:10,

        marginBottom:20

        
      }}
     
     >
      <div style={{
        width:"70%"
      }}  >
        <div  style={{
          width:"100%",
        }}>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
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
                    items: 1,
                    partialVisibilityGutter: 0
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 0
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 0
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
            {listaImage && listaImage.map((img, index) => (
                <div key={index} className="flex items-center justify-center rounded  ">
                    <img src={img} style={{
                      width:"100%",
                      borderRadius:8
                      
                    }} alt={`Imagem ${index}`} />
                </div>
            ))}
        </Carousel>
        </div>
        <ContainerParteDeBaixo>
                    <div>
                        <p>Nome:<span>{produto.nomeDoCarro}</span></p>
                    </div>
                    <div>
                        <p>Preço: <span>{FormatarMoeda(produto.price,2,"AOA")}</span></p>
                    </div>
        </ContainerParteDeBaixo>
      </div>
      <div style={{
        position:"relative",
        background:"#fff",
        width:"40%",
        display:"flex",
        flexDirection:"column",
        borderRadius:8,
        padding:10,

      }}>
        <ContainerTipoPecas>
          <p>Motor: <span>{produto.tipoMotor}</span> </p>
        </ContainerTipoPecas>

        <ContainerTipoPecas>
          <p>Freio: <span>{produto.tipoDefreio}</span> </p>
        </ContainerTipoPecas>
        <ContainerTipoPecas>
          <p>Combustivel: <span>{produto.tipoCombustivel}</span>  </p>
        </ContainerTipoPecas>


        <ContainerFazerPedido>
          <a  href={`https://api.whatsapp.com/send?phone=+244923845779text=${message}`} >Fazer Pedido</a>
        </ContainerFazerPedido>
        
        
      <div>
              
          </div>
      </div>
    </div> 
 </Container>
    
 <ChinuaNdemboBanerInfo/>
    <Container>
    <div className="container">
        <Contacto />
      </div>
    </Container>

    </>
  );
}