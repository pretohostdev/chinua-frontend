import {
    Container, Content,
    PageContainer, Welcome,
    TitleServicos, Background, ExcellenceSection, ContainerContacto, Card, CardInfo,
    CustomTaxiServiceSection
} from "./style"
import { Fade } from "react-awesome-reveal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faMapMarkedAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import Contacto from "../../shared/components/Contacto";
import { NavBar } from "../../shared/components/NavBar";
import { Logos } from "../../shared/constants/logos";
import ChinuaNdemboBanerInfo from "../../shared/components/cardInfo";


export const Taxi = () => {


    return (
        <>
        <NavBar urlLogo={Logos.logo_Taxi}  />
            <Container>
                <Fade>
                    <Background>
                        <div style={{ width: "100%" }}>
                            <Welcome>
                                <h1 style={{ textAlign: 'center' }}>Bem-vindo à Chinua Taxi</h1>
                                <p style={{ textAlign: 'center' }}>Serviço de táxi confiável e confortável</p>
                                <p style={{ textAlign: 'center' }}>Serviço de taxi personalizado</p>
                            </Welcome>
                        </div>
                    </Background>
                </Fade>
                <PageContainer>
                    <CustomTaxiServiceSection>
                        <h2>Serviço de táxi personalizado</h2>
                    </CustomTaxiServiceSection>
                    <ExcellenceSection>
                        <CardInfo info>
                            <h2>Compromisso com a Excelência</h2>
                            <p>Escolher a Chinua taxi, para o serviço executivo é optar por uma experiência de excelência em cada deslocamento. Nossa empresa se destaca por oferecer um serviço personalizado, pautado na pontualidade, conforto e segurança dos nossos clientes.</p>
                        </CardInfo>
                        <CardInfo info>
                            <h2>Frota Moderna e Luxuosa</h2>
                            <p>Contamos com uma frota de veículos modernos e luxuosos, além de motoristas altamente treinados e profissionais, prontos para atender às necessidades individuais de cada passageiro.</p>
                        </CardInfo>
                    </ExcellenceSection>
                    <Content>
                        <TitleServicos>
                            <h1>Nossos Serviços</h1>
                        </TitleServicos>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                        }}>
                            <Card>
                                <FontAwesomeIcon icon={faTaxi} size="2x" />
                                <h2>Transporte Rápido</h2>
                                <p>Oferecemos um serviço de táxi rápido e seguro para qualquer lugar da cidade.</p>
                            </Card>
                            <Card>
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
                                <h2>Viagens Planejadas</h2>
                                <p>Planeje suas viagens conosco e garanta a melhor experiência em transporte.</p>
                            </Card>
                            <Card>
                                <FontAwesomeIcon icon={faClock} size="2x" />
                                <h2>Serviço 24/7</h2>
                                <p>Nosso serviço está disponível 24 horas por dia, 7 dias por semana, para atender às suas necessidades.</p>
                            </Card>
                            <Card>
                                <FontAwesomeIcon icon={faTaxi} size="2x" />
                                <h2>Gestão de Taxi</h2>
                                <p>Otimizando Seu Negócio e Elevando a Experiência do Cliente.</p>
                            </Card>
                        </div>
                    </Content>
                    <ChinuaNdemboBanerInfo/>
                    <ContainerContacto>
                        <Contacto />
                    </ContainerContacto>
                </PageContainer>
            </Container>
        </>
    )
}