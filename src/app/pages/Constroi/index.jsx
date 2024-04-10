import { Container,Content,Logo,
    PageContainer,Welcome,ContentInfo,ContainerInfo,
    TitleServicos,Section

} from "./style"
import LogoConstroi from "../../../assets/img/constroi.png"
import { Fade } from "react-awesome-reveal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHardHat, faHouseUser } from '@fortawesome/free-solid-svg-icons';


export const Constroi=()=>{

    return(
        <>
        <Container>
        <Fade>
            <div style={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo quase escuro
                color: 'white', 
                padding: '20px',
               }}>

                <div style={{width:"100%"}} >
                    <Welcome>
                    <h1 style={{ textAlign: 'center' }}>Bem-vindo à Controi</h1>
                    <p style={{ textAlign: 'center' }}>Construindo seus sonhos com qualidade e eficiência.</p>
                    </Welcome>
                <ContentInfo>
               
                <ContainerInfo>
                <h1 style={{ textAlign: 'center',width:800 }}>Serviço de Arquitetura, Construção e Gestão de Condomínios </h1>
                </ContainerInfo>
                </ContentInfo>
            
                </div>
        </div>
        </Fade>
        <PageContainer>
                <Content>
                   <TitleServicos>
                   <h1>Serviços</h1>
                   </TitleServicos>
                    <div style={{
            display: 'flex',
            justifyContent: 'space-around', 
            flexWrap: 'wrap', 
        }}>
            <Section style={{ flex: '1', margin: '10px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <FontAwesomeIcon icon={faBuilding} size="2x" />
                <h2>Arquitetura</h2>
                <p>Desenvolvemos projetos de arquitetura em todas as escalas e em todos os setores. Encaramos cada projeto como uma oportunidade única de expressão definida pelo seu contexto, sempre orientado à criação de espaços arquitetónicos singulares.</p>
            </Section>
            <Section style={{ flex: '1', margin: '10px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <FontAwesomeIcon icon={faHardHat} size="2x" />
                <h2>Construção</h2>
                <p>Realizamos empreitadas em construção civil, reabilitação e remodelação, assim como diversos serviços de engenharia como: revisão e otimização de projetos, consultoria técnica especializada e coordenação de obra.</p>
            </Section>
            <Section style={{ flex: '1', margin: '10px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <FontAwesomeIcon icon={faHouseUser} size="2x" />

                <h2>Gestão de Condomínios</h2>
                <p>Asseguramos o convívio harmonioso entre os residentes e promovemos uma vida confortável no seu condomínio. Fazemos o melhor para se preocupar o menos possível.</p>
            </Section>
        </div>
                </Content>
              
            </PageContainer>
        </Container>
        </>
    )
}