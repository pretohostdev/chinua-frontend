import styled from "styled-components";




export const ContainerInformation=styled.div`
width: 100%;
background: linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(204,217,42,1) 35%, rgba(255,111,0,1) 100%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 25px;

`

export const ContainerTitleFaleConnosco=styled.div `
margin-top: 25px;
margin-bottom: 25px;


color: #ffff;

a{
    
    font-size: 24px;
    cursor: pointer;
    border-bottom: 2px solid #fff;
}

`

export const ContainerConactos=styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
background: #402208;
border: 1px solid #c58d09;
border-radius: 8px;
padding: 10px;


@media (max-width:768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

`


export const ContactoInfos=styled.div`
display: flex;
flex-direction: column;

gap: 5px;

color: #fff;
a{
    font-weight: 300;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;

    &:hover{
        border-bottom: 2px solid #c58d09;
    }
}
`

export const ContainerTitle=styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;


@media (max-width:768px) {
display: flex;
justify-content: flex-start;
align-items: center;
}
h3{
    color: #fff;
    font-weight: 400;
    font-size: 24px;
}
`

 export const ContainerFooterOK=styled.div`
 margin-top: 20px;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 @media (max-width:768px) {
width: 100%;
display: flex;
 justify-content: center;
 align-items: center;
 }

 p{
    color: #fff;
    font-weight: 600;

    span{
        font-weight: 300;
    }
    @media (max-width:768px) {
        text-align: center;
    }
 }
 

 h3{
    margin-top: 10px;
    margin-bottom: 15px;
    color: #fff;

    font-size: 18px;


    @media (max-width:768px) {
        text-align: center;
    }

 }
 `