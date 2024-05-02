import api from "../../core/api/index.js";
import { useState, useEffect, useContext } from "react";
import { NewCardTerrenoFazenda } from "../../shared/components/Card/CardFazenda.jsx";
import { NavBar } from "../../shared/components/NavBar/index.jsx";

import Carousel from "react-multi-carousel";
import { UserContext } from "../../context/UserContext.jsx";

const API = import.meta.env.API_LOCAL
export default function PageFazenda() {
    const{fazendas,buscarTodasAsFazendas}=useContext(UserContext)
    const [quantidadeExibida, setQuantidadeExibida] = useState(10);


    const handleLimitChange = (quantidade) => {
        setQuantidadeExibida(quantidade);
    };
    
    useEffect(() => {
        buscarTodasAsFazendas()
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

<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://www.webturizm.ru/photoforum/pics/huambo_angola.jpg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-6xl font-medium text-yellow-50">Encontra as melhores fazendas  Chinua Dembo</h3>
        <p className="text-3xl text-yellow-500">Líderes em intermediações de fazendas em toda Angola</p>
    </div>
</div>
<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://medicareclub.ao/image/cache/catalog/guia/luanda/miradouro%20da%20lua/Angola-20080104-164744-00062-1240x827.jpg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-6xl font-medium text-yellow-50">Grandes fazendas é na Chinua Dembo</h3>
        <p className="text-3xl text-yellow-500">Somos lideres em vendas de terrenos</p>
    </div>e
</div>
</Carousel>


                    <div className="flex   gap-3 items-center justify-end  flex-row  mt-4 px-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(5)}>Exibir 5 Terras</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(10)}>Exibir 10 Terras</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(fazendas.length)}>Todos os Terras</button>

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

                            fazendas.slice(0, quantidadeExibida).map((produdo, index) => (
                                <NewCardTerrenoFazenda
                                    image={`http://127.0.0.1:3000/uploads/fazendas/${produdo.image.map(images => images)[0]}`}
                                    dimensao={produdo.dimensao}
                                    localizacao={produdo.localizacao}
                                    preco={produdo.price}
                                    tipo={produdo.tipo}
                                    key={produdo._id}
                                    id={produdo._id}
                                    status={produdo.status}
                                />
                            ))
                        }
                    </div>


                </div>
            </div></>
    )
}