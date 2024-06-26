import styled from 'styled-components';
import dark from "../../shared/styles/theme/dark";
import chinBlack from '../../../assets/img/chin-black.png'
export const ProductDetailsContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #020617;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: fill;
  border-radius: 20px;
`;

export const ProductName = styled.h2`
text-align: center;
  color: #fff;
  font-weight: 200;
`;

export const ProductPrice = styled.h2`
  color: #fff;
  font-weight: 300;
  span{
    color: #fff;
    font-weight: 600;
  }
`;

export const ProductDescription = styled.p`
  color:#e2e8f0 ;
  line-height: 1.6;
  text-align: justify;

`;

export const Container = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    position: relative;
    //overflow-y: hidden!important;
    
    ${props => props.back == "true" ? `background-image: url(${chinBlack}); background-repeat: no-repeat; background-size: 110%; background-position:center;    background-attachment: fixed;` : ''};
    ${props => props.first == "true" && `height: calc(100vh - 6rem)`};
    &::before{
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;
        height: 5px;
        background-image: linear-gradient(to right, ${dark.aux}, ${dark.background})
    }
    background:transparent;
`

export const ButtonPedido = styled.button`
  background: #daa520;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 32px;
  transition: 2s all;
  &:hover{
    transform: scale(0.8);
    background: #10b981;
  }

`

export const ContainerFazerPedido = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 60%;
background: #d28f3d;
height: 40px;
margin-bottom: 10px;
border-radius: 8px;

left: 20%;
bottom: 0;


a{
  color: #fff;
  font-size: 18px;
}



`;


export const ContainerTipoPecas = styled.div`
width:100%;
background:#fde58a;
height:60px;
border-left:4px solid #d87607;
margin-bottom:14px;
display:flex;
justify-content:"flex-start";
align-items:"center";
border-radius:8px;
padding:8px;
p{
  font-size: 18px;
  font-weight: 600;
  span{
    font-weight: 400;
  }
}

`;

export const ContainerParteDeBaixo=styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-top: 20px;
width: 100%;
height: 100px;
background: #fff;
border-radius: 8px;
padding: 10px;
flex-direction: column;

div{

  p{
    font-weight: 400;
    font-size: 24px;
    
    span{
        margin-left: 10px;
        font-weight: bold;
    }
  }
}
`;