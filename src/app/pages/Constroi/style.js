
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
  background: url("https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") no-repeat center center;
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