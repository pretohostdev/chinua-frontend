import React, { useState } from 'react';
import {
  Container, Content,
  PageContainer, Welcome, ContentInfo, ContainerInfo,
  Background, ContinaerContacto, ContainerRepair, Card, Title, Description, ServiceSection,
  WorkSection, WorkCard, TeamSection, TeamMember
} from "./style"
import { Fade } from "react-awesome-reveal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faProjectDiagram, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import VideoMecanica from "../../../assets/video/mecanica_01.mp4"

import Contacto from "../../shared/components/Contacto";
import Modal from './Modal';
import { NavBar } from '../../shared/components/NavBar';
import { Logos, Videos } from '../../shared/constants/logos';


export const Repair = () => {
  const [modalImage, setModalImage] = useState(null);


  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const services = [
    {
      icon: faShoppingCart,
      title: 'Venda',
      description: 'Vendas de equipamentos, peças. Assessoria e Planejamento Térmico, tudo que você precisa para o seu ambiente.',
    },
    {
      icon: faProjectDiagram,
      title: 'Projetos',
      description: 'Desenvolvemos projetos na medida da sua necessidade, utilizando alternativas inteligentes e econômicas.',
    },
    {
      icon: faTools,
      title: 'Serviços',
      description: 'Prestamos assistência através de equipas residentes, visitas programadas. Realizamos manutenção preventiva e corretivas, e limpeza em todas as marcas conceituadas do mercado (Plano de Manutenção Operacional e Controle).',
    },
  ];


  const works = [
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Trabalho 1' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1664301132849-f52af765df79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Trabalho 2' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Trabalho 3' },
    { imageUrl: 'https://images.unsplash.com/photo-1527738697320-513f6648bc26?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Trabalho 4' },
    { imageUrl: 'https://images.unsplash.com/photo-1558919047-80f932b017cf?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Trabalho 5' },
  ];

  const team = [
    { name: 'Técnico 1', role: 'Especialista em Refrigeração', imageUrl: 'https://plus.unsplash.com/premium_photo-1663099866716-66129474193c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Técnico 2', role: 'Especialista em Ventilação', imageUrl: 'https://plus.unsplash.com/premium_photo-1683121455838-25d03a921a27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <>
      <NavBar urlLogo={Logos.logo_Repair} />
      <Container>
        <Fade>
          <Background>
            <video style={{
              position: "absolute",
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} autoPlay muted loop>
              <source src={Videos.video_Repair} type="video/mp4" />

            </video>

            <div style={{ width: "100%" }} >
              <Welcome>
                <h1 style={{ textAlign: 'center' }}>Bem-vindo à Chinua Repair</h1>
                <p style={{ textAlign: 'center' }}>Ventilação, Refrigeração e Ar-Condicionados</p>
              </Welcome>
              <ContentInfo>

                <ContainerInfo>
                  <h1 style={{ textAlign: 'center', width: 800 }}>Ventilação, Refrigeração e Ar-Condicionados</h1>
                </ContainerInfo>
              </ContentInfo>

            </div>
          </Background>
        </Fade>
        <PageContainer>
          <Content>
            <ContainerRepair>
              <h1 style={{ marginTop: 25, marginBottom: 25 }}>.... Chinua Repair ....</h1>
              <ServiceSection>
                {services.map((service, index) => (
                  <Card key={index}>
                    <FontAwesomeIcon icon={service.icon} size="2x" />
                    <Title>{service.title}</Title>
                    <Description>{service.description}</Description>
                  </Card>
                ))}
              </ServiceSection>
              <WorkSection>
                {works.map((work, index) => (
                  <WorkCard key={index} onClick={() => openModal(work.imageUrl)} >
                    <img src={work.imageUrl} alt={work.description} />
                    <p>{work.description}</p>
                  </WorkCard>
                ))}
              </WorkSection>
              <TeamSection>
                {team.map((member, index) => (
                  <TeamMember key={index} onClick={() => openModal(member.imageUrl)} >
                    <img src={member.imageUrl} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </TeamMember>
                ))}
              </TeamSection>
              {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
            </ContainerRepair>

          </Content>
          <ContinaerContacto>
            <Contacto />
          </ContinaerContacto>

        </PageContainer>
      </Container>
    </>
  )
}