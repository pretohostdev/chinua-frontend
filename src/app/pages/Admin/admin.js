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
padding: 0 20px;
margin-top: 20px;
margin-bottom: 20px;
background-color: #fff;
border-radius: 10px;
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
  margin-top: 20px;
  margin-bottom: 20px;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;