
import styled from "styled-components";
import VideoMecanica from "../../../assets/video/mecanica_01.mp4"

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #ededed;
    display: flex; 
    justify-content: center;
    position: relative;
    flex-direction: column;
    margin-bottom: 25px;
`

export const PageContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`

  width: 250px;
  height: auto; 
`;

export const Content = styled.div`
flex-basis: 50%;
  
`;

export const Welcome=styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
}
  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
}

`
export const ContentInfo=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

h1{
    font-size: 25px;
    font-weight: 400;
}

`;
export const ContainerInfo=styled.div`


`

export const TitleServicos=styled.div`
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;

`

export const Section=styled.div`



p{
    text-align: justify;
}

`



export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${VideoMecanica}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  position: relative;
  width: 100%; 
  height: 500px; 




  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const ContentBackground = styled.div`
  position: relative;
  z-index: 1;
`;


export const ContinaerContacto=styled.div`
width: 100%;
padding: 0px 20px;

height: auto;
margin-bottom: 25px;


background: rgba(37, 43, 54, 0.95);

`



export const ContainerRepair = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ServiceSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
`;


export const WorkSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const WorkCard = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 20px;
  }
  p {
    padding: 8px;
  }
`


export const TeamSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

export const TeamMember = styled.div`
  width: 200px;
  text-align: center;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  img {
    width: 100px; 
    height: 100px; 
    border-radius: 50%;
    object-fit: cover; 
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 5px;
  }
  p {
    font-size: 0.9rem;
    color: #666;
  }
`;