import api from "../../core/api/index.js";
import { useState, useEffect, useContext } from "react";
import { NewCardCarro } from "../../shared/components/Card/Card.jsx";
import { NavBar } from "../../shared/components/NavBar/index.jsx";

import Carousel from "react-multi-carousel";
import { UserContext } from "../../context/UserContext.jsx";
import { Container } from "../Home/styles.js";
import Contacto from "../../shared/components/Contacto/index.jsx";

const API = import.meta.env.API_LOCAL
export default function PageCarro() {
    const{listaDeCarro,buscarTodosCarros}=useContext(UserContext)
    const [quantidadeExibida, setQuantidadeExibida] = useState(10);


    const handleLimitChange = (quantidade) => {
        setQuantidadeExibida(quantidade);
    };
    
    useEffect(() => {
        buscarTodosCarros()
    }, [quantidadeExibida]);

    return (

        <>
            <NavBar />
            <div style={{
                
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column"
                }} >

<Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
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

<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://avtovesti.com/wp-content/uploads/2023/03/756784495180107.jpg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-6xl font-medium text-yellow-50">Todos os carros da Chinua Ndembo</h3>
        <p className="text-3xl text-yellow-500">Líderes em intermediações de carro em toda Angola</p>
    </div>
</div>
<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://w.forfun.com/fetch/14/140b2640c898cb479ff8a9c00fc4bd68.jpeg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-6xl font-medium text-yellow-50">Grandes marcas é na Chinua Ndembo</h3>
        <p className="text-3xl text-yellow-500">Somos lideres em vendas de carros</p>
    </div>
</div>
</Carousel>


                    <div className="flex   gap-3 items-center justify-end  flex-row  mt-4 px-2">
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(5)}>Exibir 5 carros</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(10)}>Exibir 10 carros</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(listaDeCarro.length)}>Todos os carros</button>

                    </div>

                    <div style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignContent: "center"
                    }}>

                        {

                            listaDeCarro.slice(0, quantidadeExibida).map((carro, index) => (
                                <NewCardCarro
                                    image={`https://api-chinua.onrender.com/uploads/carros/${carro.image.map(images => images)[0]}`}
                                    nomeDoCarro={carro.nomeDoCarro}
                                    price={carro.price}
                                    tipoCombustivel={carro.tipoCombustivel}
                                    tipoDefreio={carro.tipoDefreio}
                                    tipoMotor={carro.tipoMotor}
                                    key={carro._id}
                                    status={carro.status}
                                    id={carro._id}
                                />
                            ))
                        }


                        {
                            listaDeCarro.length === 0 && (
                                <div className="w-full h-screen  bg-slate-400 mt-8 rounded  mx-5  flex  justify-center items-center"   >
                                    <h3 className="text-white  font-bold  text-4xl " >Por enquanto não existe nenhum fazenda ou terreno resgistrado</h3>
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>
            
            <Container>
      <div className="container">
        <Contacto />
      </div>
    </Container>

            </>
    )
}