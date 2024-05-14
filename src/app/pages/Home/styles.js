import styled from "styled-components";
import dark from "../../shared/styles/theme/dark";
import chinBlack from '../../../assets/img/chin-black.png'
export const Container = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    position: relative;
    // overflow-y: hidden!important;
    
    ${props => props.back == "true" ? `background-image: url(${chinBlack}); background-repeat: no-repeat; background-size: 110%; background-position:center;    background-attachment: fixed;` : ''};
    ${props => props.first=="true" && `height: calc(100vh - 6rem)`};
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
`
export const Footer = styled.footer`
    width: 100%;
    display: flex; 
    justify-content: center;
    position: relative;
    overflow: hidden!important;
    flex-direction: column;
`



export const ListProduto=styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
overflow-x: hidden;
cursor: pointer;


`

export const ContainerButtonProduto=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;


div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0px 10px;

    button{
        border: none;
        padding: 8px 32px;
        background: #d97706;
        color: #fff;
        cursor: pointer;
        border-radius: 8px;
        font-weight: 600;
    }
}
`

export const ContainerFiltro=styled.div`
width: 100%;
background: #cbd5e1;
display: flex;
justify-content: flex-end;
align-items: center;
border-radius: 8px;
margin-bottom: 20px;
color: #fff;


select{
    display: flex;
    align-items: center;
    margin-left: 10px;
    flex-basis: 10%;
    background: #020617;
    font-size: 18px;
    color: #fff;
    margin: 3px 10px;
    border: none;
    border-radius: 8px;
    padding: 2px;
    
    option{
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }
}
`

export const ContainerTitle=styled.div`
margin-top: 15px;
margin-bottom: 15px;
display: flex;
justify-content: center;
align-items: center;
h2{
    color: #fff;
    font-weight: 300;
    font-size: 32px;
}

@media (max-width: 768px) {
    width:100%;
    justify-content: center;
    align-items: center;
    h2{
    color: #fff;
    font-weight: 200;
    font-size: 24px;
}

}


`;