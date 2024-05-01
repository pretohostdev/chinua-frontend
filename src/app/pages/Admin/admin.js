import styled from "styled-components";



export const ContainerHeader =styled.header`
display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`
export const  ContainerMain =styled.main`
display: flex;
width: 100%;
justify-content: space-around;
align-items: start;
flex-direction: row;
gap: 5px;
margin-top: 20px;
margin-bottom: 20px;
background-color: #f6f6f5;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}

`;


export const ContainerAside =styled.aside`
  width: 25%;
height: 500px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  p{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ContainerLabelInput=styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;


label{
font-weight: 500;
color: #333;
  }
input{
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

select{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 100%;    
  }
`;


export const ContainerLabelInputUploadImage=styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
  &:active {
    background-color: #d0d0d0;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

`;







export const ContaienerMain=styled.main`
display: flex;
width: 80%;
background: #e7e7e6;
border-radius: 8px;


`;
export const ContainerContentsFlex=styled.div`
padding: 12px;
display: flex;
width: 100%;
gap: 5px;


`;

export const ContainerFormUpdate=styled.div`
width: 70%;
background: #d1d0d0;
border-radius: 8px;
padding: 10px;
flex-direction: column;
`;



export const ContainerFormUpdateHeader=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #5e5d5c;
height: 40px;
border-radius: 8px;


p{
  color: #fff;
  font-weight: 600;
}
`;



export const ContainerFormUpdateContent=styled.div`
width: 100%;
height: 94%;
background: #e7e6e6;
margin-top: 5px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: row;
padding: 10px;
gap: 5px;
`
export const ContainerFormLeft=styled.div``;
export const ContainerButtonSelecinar=styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`;

export const ContainerBuscarProduto=styled.div`
width: 100%;
margin-top: 5px;
margin-bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
background: #e7e6e6;
border: 1px solid #898887;
border-radius: 8px;



input{
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 3px;
  color: #121212;
  font-weight: 600;
}


`;