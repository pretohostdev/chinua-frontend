import { Container,Content,Logo,
    PageContainer,Welcome,ContentInfo,ContainerInfo,
    TitleServicos,Section,Background,ContentBackground,ContinaerContacto

} from "./style"
import { Fade } from "react-awesome-reveal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHardHat, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { Gallery } from "./Gallery";
import Contacto from "../../shared/components/Contacto";
import { NavBar } from "../../shared/components/NavBar";
import { Logos } from "../../shared/constants/logos";


export const Constroi=()=>{

    const projects = [
        {
          name: 'Projeto 1',
          description: 'Descrição do Projeto 1',
          image: 'https://images.unsplash.com/photo-1593786267440-550458cc882a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Projeto 2',
          description: 'Descrição do Projeto 2',
          image: 'https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Projeto 3',
            description: 'Descrição do Projeto 3',
            image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Projeto 4',
            description: 'Descrição do Projeto 4',
            image: 'https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Projeto 5',
            description: 'Descrição do Projeto 5',
            image: 'https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Projeto 6',
            description: 'Descrição do Projeto 6',
            image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ]

    return(
        <>
        <NavBar  urlLogo={Logos.logo_Constroi} />
        <Container>
        <Fade>
            <Background>

                <div style={{width:"100%"}} >
                    <Welcome>
                    <h1 style={{ textAlign: 'center' }}>Bem-vindo à Chinua Controi</h1>
                    <p style={{ textAlign: 'center' }}>Construindo seus sonhos com qualidade e eficiência.</p>
                    </Welcome>
                <ContentInfo>
               
                <ContainerInfo>
                <h1 style={{ textAlign: 'center',width:800 }}>Serviço de Arquitetura, Construção e Gestão de Condomínios </h1>
                </ContainerInfo>
                </ContentInfo>
            
                </div>
        </Background>
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
        <Gallery projects={projects} />
      

      <ContinaerContacto>
      <Contacto/>
      </ContinaerContacto>
        </Content>
              
        </PageContainer>
        </Container>
        </>
    )
}