import { useState, useEffect } from "react";
import { NavBar } from "../../shared/components/NavBar/index.jsx";

import Carousel from "react-multi-carousel";
import { Container } from "../Home/styles.js";
import Contacto from "../../shared/components/Contacto/index.jsx";

import { CardEquipamentoPadaria } from "../../shared/components/Card/CardEquipamento.jsx";
import CardInfo from "../../shared/components/cardInfo/index.jsx";
import { useQuery } from "react-query";
import api from "../../core/api/index.js";
import Spinner from "../../shared/components/spiner/index.jsx";


const API = import.meta.env.API_LOCAL

export default function EquipamentoDaPadaria() {

    const [quantidadeExibida, setQuantidadeExibida] = useState(10);

    const { data, error, isLoading } = useQuery("reposEquipamentos", async () => {
        return await api.get("/equipamento/listar").then((response) => response.data)
    },
        {
            retry: 5,
            refetchInterval: 5000,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true
        }
    )

    const handleLimitChange = (quantidade) => {
        setQuantidadeExibida(quantidade);
    };

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
                        {/* 
<div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: "url('https://www.webturizm.ru/photoforum/pics/huambo_angola.jpg')",height:700}}>
    <div className="flex justify-center items-center  flex-col ">
        <h3 className="text-3xl font-medium text-yellow-50">VENDEMOS TODO TIPO DE EQUIPAMENTOS PARA A SUA PADARIA</h3>
        <p className="text-3xl text-yellow-500">Oferecemos a solução completa</p>
    </div>
</div> */}
                        <div className="w-full flex   flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.gfrservices.com/wp-content/uploads/2019/07/industrial-oven.jpg')", height: 700 }}>
                            <div className="flex justify-center items-center  flex-col ">
                                <h3 className="text-3xl font-medium text-yellow-50">VENDEMOS TODO TIPO DE EQUIPAMENTOS PARA A SUA PADARIA</h3>
                                <div className=" bg-yellow-500 rounded-lg w-[400px]   justify-center items-center p-2   " >
                                    <a className="text-3xl text-white  " href="tel:+244923845779" >Faça já a sua solicitação</a>
                                </div>
                            </div>
                        </div>
                    </Carousel>


                    <div className="flex   gap-3 items-center justify-end  flex-row  mt-4 px-2">
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(5)}>Exibir 5 Equipamentos</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(10)}>Exibir 10 Equipamentos</button>
                        <button className="bg-yellow-500 hover:border-[1px] hover:bg-yellow-800  text-white font-bold py-2 px-4 rounded" onClick={() => handleLimitChange(data?.length)}>Todos  Equipamentos</button>

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

                            data?.slice(0, quantidadeExibida).map((produto, index) => (
                                <CardEquipamentoPadaria
                                    image={`${produto.image.map(images => images)[0]}`}
                                    estadoDeConcervacao={produto.estadoDeConcervacao}
                                    id={produto.id}
                                    nomeProduto={produto.nomeProduto}
                                    price={produto.price}
                                    status={produto.status}
                                    key={index.toString()}

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
                    <CardInfo />


                </div>
            </div>
            <Container>
                <div className="container" id="contact" >
                    <Contacto />
                </div>
            </Container>

        </>
    )
}