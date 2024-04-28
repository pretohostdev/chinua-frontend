import api from "../../core/api/index.js";
import { useState, useEffect } from "react";
import { NewCardCarro } from "../../shared/components/Card/Card.jsx";
import { NavBar } from "../../shared/components/NavBar/index.jsx";

import Carousel from "react-multi-carousel";

const API = import.meta.env.API_LOCAL
export default function PageCarro() {
    const [listaDeCarro, setListaDeCarro] = useState([])
    const [quantidadeExibida, setQuantidadeExibida] = useState(10);


    const handleLimitChange = (quantidade) => {
        setQuantidadeExibida(quantidade);
    };
    async function buscarTodosCarros() {
        await api.get("/carro/listar")
            .then(async (response) => {
                const carros = await response.data;
                setListaDeCarro(carros);
            })
    }
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
  arrows
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
        <h3 className="text-6xl font-medium text-yellow-50">Todos os carros da Chinua Dembo</h3>
        <p className="text-3xl text-yellow-500">Líderes em intermediações de carro em toda Angola</p>
    </div>
</div>
<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://w.forfun.com/fetch/14/140b2640c898cb479ff8a9c00fc4bd68.jpeg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-6xl font-medium text-yellow-50">Grandes marcas é na Chinua Dembo</h3>
        <p className="text-3xl text-yellow-500">Somos lideres em vendas de carros</p>
    </div>e
</div>
</Carousel>


                    <div className="flex   gap-3 items-center justify-end  flex-row  mt-4 px-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(5)}>Exibir 5 carros</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(10)}>Exibir 10 carros</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(listaDeCarro.length)}>Todos os carros</button>

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
                                    image={`http://localhost:3000/uploads/carros/${carro.image.map(images => images)[0]}`}
                                    nomeDoCarro={carro.nomeDoCarro}
                                    price={carro.price}
                                    tipoCombustivel={carro.tipoCombustivel}
                                    tipoDefreio={carro.tipoDefreio}
                                    tipoMotor={carro.tipoMotor}
                                    key={carro._id}
                                    status={carro.status}
                                />
                            ))
                        }
                    </div>


                </div>
            </div></>
    )
}