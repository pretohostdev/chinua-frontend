import { Link } from "react-router-dom";
import styled from "styled-components";


export const ConatinerCardProduto=styled.div`
width: 350px;
height: 420px;
border-radius: 10px;
padding: 5px;
margin: 2px 2px;
background:#fff;
box-shadow: 4px 4px 10px #111827;
margin-top: 15px;
margin-bottom: 15px;


h3{
    font-weight: 400;
}
`
export const ContainerImage=styled.div`
width: 100%;
position: relative;
img{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 200px;
    border-radius: 10px;
}

h3 {
      
        position: absolute;

    top: 25%;
    left: 25%;
    right: 0;
    bottom: 0;
        transform: translate(-50%, -50%);
        font-weight: 400;
        font-size: 40px;
        transform: rotate(-45deg);
    
        color: ${({status})=>status==="Vendido"?"#ff2a2a":"#9c9c9c"};
        display: ${({ status }) =>(status ? "block" : "none")};
    }
`;

export const ContainerNomeDoProduto=styled.div`

p{
    font-size: 18px;
    font-weight: 500;
    border-bottom: 0.5px   dashed #fbbf24 ;
}

`
export const ContainerPrice=styled.div`
width:122px;
height: 25px;


border-bottom:2px solid #fbbf24;
margin-top: 15px;
padding: 2px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
p{
    display: flex;
    font-size: 14px;
    font-weight: 400;
    span{
        font-weight: 600;
        margin: 0px 2px ;
    }
}


`;
export const ContainerDiscription=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
p{
    color: #1e293b;
    text-align: justify;
    span{
        font-weight: 700;
    }

}
div{
    width: 110px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    margin-top: 5px;
    padding: 4px;
    background:#fbbf24 ;
    margin-bottom: 15px;
    img{
        width: 20px;
        height: auto;
    }
    span{
       margin-left: 2px;
    font-size: small;
    font-weight: 500;
    }
}

`;
export const ConatinerButton=styled(Link)`
width: 100%;
background: #020617;
display: flex;
justify-content: center;
align-items: center;
height: 40px;
border-radius: 8px;
color: #fff;
font-weight: 300;
font-size: 18px;
margin-bottom: 5px;
    cursor: pointer;
        transition: 0.4s  ease-in-out all;
    &:hover{
        transform: scale(0.95);
    }



`;

export const ContainerFlexTitle=styled.div`
div{
    width: 110px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    margin-top: 5px;
    padding: 4px;
    background:#fbbf24 ;
    margin-bottom: 15px;
    img{
        width: 20px;
        height: auto;
    }
    span{
       margin-left: 2px;
    font-size: small;
    font-weight: 500;
    }
}
`;