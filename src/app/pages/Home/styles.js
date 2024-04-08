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