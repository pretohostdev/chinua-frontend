import api from "../../core/api/index.js";
import { useEffect, useState } from "react";

import { NavBar } from "../../shared/components/NavBar/index.jsx";

import Carousel from "react-multi-carousel";

import { Container } from "../Home/styles.js";
import Contacto from "../../shared/components/Contacto/index.jsx";
import { CardMaquina } from "../../shared/components/Card/CardMaquinas.jsx";
import ChinuaNdemboBanerInfo from "../../shared/components/cardInfo/index.jsx";
import { useQuery } from "react-query";
import Spinner from "../../shared/components/spiner/index.jsx";

const API = import.meta.env.API_LOCAL
export default function PageMaquinaria() {

    const [quantidadeExibida, setQuantidadeExibida] = useState(10);


    const handleLimitChange = (quantidade) => {
        setQuantidadeExibida(quantidade);
    };
    const { data, error, isLoading } = useQuery("reposTerras", async () => {
        return await api.get("/terra/listar").then((response) => response.data)
    },
        {
            retry: 5,
            refetchInterval: 5000,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true
        }
    )

    useEffect(() => {
        scrollTo({ top: 1 })
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

                        <div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://img.indianautosblog.com/2014/03/JCB-JS120-press-shot.jpg')", height: 700 }}>
                            <div className="flex justify-center items-center  flex-col ">
                                <h3 className="text-6xl font-medium text-yellow-50">Todos os carros da Chinua Ndembo</h3>
                                <p className="text-3xl text-yellow-500">Líderes em intermediações de maquinarias pesadas em toda Angola</p>
                            </div>
                        </div>
                        <div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp10819914.jpg')", height: 700 }}>
                            <div className="flex justify-center items-center  flex-col ">
                                <h3 className="text-6xl font-medium text-yellow-50">Grandes marcas é na Chinua Ndembo</h3>
                                <p className="text-3xl text-yellow-500">Somos lideres em vendas e compra de maquinarias pesadas</p>
                            </div>e
                        </div>
                    </Carousel>


                    <div className="flex   gap-3 items-center justify-end  flex-row  mt-4 px-2">
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded " onClick={() => handleLimitChange(5)}>Exibir 5 Maquinas</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(10)}>Exibir 10 Maquinas</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(data?.length)}>Todos as Maquinas</button>
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

                            data?.slice(0, quantidadeExibida).map((maquina, index) => (
                                <CardMaquina
                                    image={maquina.image.map(images => images)[0]}
                                    nomeDaMaquinaria={maquina.nomeDaMaquinaria}
                                    price={maquina.price}
                                    tipoCombustivel={maquina.tipoCombustivel}
                                    tipoDefreio={maquina.tipoDefreio}
                                    tipoMotor={maquina.tipoMotor}
                                    key={maquina.id}
                                    status={maquina.status}
                                    id={maquina.id}
                                    estadoDeConversao={maquina.estadoDeConversao}
                                    tipoDeMaquinaria={maquina.tipoDeMaquinaria}
                                />
                            ))
                        }


                        {
                            isLoading && (
                                <div className="w-full h-screen  bg-yellow-500 mt-8 rounded  mx-5  flex  justify-center items-center"   >
                                    <Spinner />
                                </div>
                            )
                        }
                        {
                            data?.length === 0 && (
                                <div className="w-full h-screen  bg-yellow-500 mt-8 rounded  mx-5  flex  justify-center items-center"   >
                                    <h3 className="text-white  font-bold  text-4xl " >Por enquanto não existe nenhum imovel resgistrado</h3>
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>
            <ChinuaNdemboBanerInfo />
            <Container>
                <div className="container">
                    <Contacto />
                </div>
            </Container>

        </>
    )
}