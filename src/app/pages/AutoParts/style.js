
import styled from "styled-components";


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

`;
export const ContainerInfo=styled.div`


`

export const TitleServicos=styled.div`
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
  font-size: 30px;
  font-weight: 400;
  color: #ef4444;
}
`





export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center;
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
export const Section = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  box: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: center;
`;
export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const GalleryItem = styled.div`
  width: 400px;
  height: 300px;
  background-color: #eee; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const TeamSection = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const TeamMember = styled.div`
  margin: 20px;
  display: inline-block;
  width: 200px;
  text-align: center;
`;





export const ServiceSection = styled.div`
width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
`;

export const ServiceCard = styled.div`
  width: 30%;
  margin: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 90%;
  }

`;

export const ServiceImage = styled.div`
  width:100%;
  height: 600px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const ServiceInfo = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const ServiceTitle = styled.h3`
  margin: 0;
`;

export const ServiceDescription = styled.p`
  margin: 10px 0;
`;

export const LearnMoreButton = styled.button`
  background-color: #ffa500; // Cor do botão
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc8400; // Cor do botão ao passar o mouse
  }
`;