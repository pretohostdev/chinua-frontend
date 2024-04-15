import React from 'react';
import {
    Container, Content,
    PageContainer, Welcome, ContentInfo,
    ContainerInfo, TitleServicos, Background,
    ContinaerContacto, GalleryContainer, GalleryItem,
    TeamSection, TeamMember,
    ServiceSection, ServiceCard, ServiceImage, ServiceInfo, ServiceTitle, ServiceDescription, LearnMoreButton
} from "./style";


import { Fade ,Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faPaintRoller, faCarCrash } from '@fortawesome/free-solid-svg-icons';
import Contacto from "../../shared/components/Contacto";
import { NavBar } from '../../shared/components/NavBar';
import { Logos ,Videos} from '../../shared/constants/logos';


const cars = [
    { imageUrl: "https://images.pexels.com/photos/5182312/pexels-photo-5182312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { imageUrl: "https://images.pexels.com/photos/5182309/pexels-photo-5182309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { imageUrl: "https://images.pexels.com/photos/5229528/pexels-photo-5229528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { imageUrl: "https://images.pexels.com/photos/5158091/pexels-photo-5158091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { imageUrl: "https://images.pexels.com/photos/5182312/pexels-photo-5182312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

]

const services = [
    {
        title: "SERVIÇOS RÁPIDOS",
        description: "Serviços técnicos sem marcação prévia.",
        image: "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "ASSISTÊNCIA TÉCNICA",
        description: "Equipamentos tecnologicamente avançados.",
        image: "https://images.pexels.com/photos/4489774/pexels-photo-4489774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "PEÇAS",
        description: "Peças e acessórios originais.",
        image: "https://images.pexels.com/photos/8985711/pexels-photo-8985711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export const AutoParts = () => {
    return (
        <>
        <NavBar urlLogo={Logos.logo_AutoParts}  />
            <Container>
                <Fade>
                    <Background>

                    <video style={{
              position: "absolute",
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} autoPlay muted loop>
              <source src={Videos.video_AutoParts} type="video/mp4" />

            </video>
                        <div style={{ width: "100%" }}>
                            <Welcome>
                                <h1 style={{ textAlign: 'center', }}>Bem-vindo à Chinua Auto Parts</h1>
                                <p style={{ textAlign: 'center', }}>Soluções completas para o seu veículo.</p>
                            </Welcome>
                            <ContentInfo>
                                <ContainerInfo>
                                
                                </ContainerInfo>
                            </ContentInfo>
                        </div>
                    </Background>
                </Fade>
                <PageContainer>
                    <Content>
                        <TitleServicos>
                            <h1>Serviço de Mecânica Auto</h1>
                            <h1>Pintura Auto & Bate-Chapa</h1>

                        </TitleServicos>
                        <ServiceSection>
                            {services.map((service, index) => (
                                
                                <ServiceCard key={index}>
                                    <Slide>
                                    <ServiceImage backgroundImage={service.image} />
                                    <ServiceInfo>
                                        <ServiceTitle>{service.title}</ServiceTitle>
                                        <ServiceDescription>{service.description}</ServiceDescription>
                                        <LearnMoreButton>SABER MAIS</LearnMoreButton>
                                    </ServiceInfo>
                            </Slide>
                                </ServiceCard>
                            ))}
                        </ServiceSection>

                        <div 
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            marginTop:25,
                            marginBottom:25
                        }}
                        >
                            <h2   
                            style={{
                                textAlign:"center"
                            }}
                            >Nossa Galeria de carros</h2>
                            <GalleryContainer>
                                <Slide cascade triggerOnce damping={0.3}>
                                {cars.map((car,index) => <GalleryItem   key={index} >
                                    <img src={car.imageUrl} />
                                </GalleryItem>)}
                                </Slide>
                            </GalleryContainer>
                            <TeamSection>
                                <h1>Nossa Equipe</h1>
                                <TeamMember>João</TeamMember>
                                <TeamMember>Maria</TeamMember>
                                <TeamMember>Carlos</TeamMember>
                            </TeamSection>
                        </div>
                        <ContinaerContacto>
                            <Contacto />
                        </ContinaerContacto>
                    </Content>
                </PageContainer>
            </Container>
        </>
    );
}