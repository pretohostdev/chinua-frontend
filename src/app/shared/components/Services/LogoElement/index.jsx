import styled from "styled-components";
import { Container } from "./styles";
import Image from '../../../../../assets/img/busness.jpg'
import Chin from '../../../../../assets/img/chin.png'
import dark from "../../../styles/theme/dark";
import { Fade } from "react-awesome-reveal";
const StyleLogo = styled.div`
    width: 30%;
    display: flex;
    flex-flow: column;
    row-gap: 4rem;
    position: relative;


    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100%;
    }
   
    &::before{
        content: '';
        position: absolute;
        left: -40px;
        top: -1px;
        width: 88px;
        height: 100%;
        background-color: ${dark.aux};
        z-index:1;
    }
    img{
        width: 250px;
        height: auto!important;

        object-fit: fill;
        position: relative;
        z-index: 2;
        transform: translate(-25px, 50px);

    }
    .continuo {
        display: flex;
        width: 40%;
        color: ${dark.aux};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400 !important;
        align-self: flex-end;
        margin-right: 4rem;

        @media screen and (max-width: 960px){
            flex-direction: row;
            width: 40vw;
            font-size: 1.4rem;
            transform: translate(40px, -40px);
           
        }

        
        @media screen and (max-width: 490px){
            width: 60vw;
            font-size: 1rem;
            transform: translate(40px, -10px);
        }
        .arrow {
          width: 50px;
          height: 2px;
          background-color: ${dark.aux};
          position: relative;
    
          &::after {
            content: "";
            position: absolute;
            border-style: solid;
            border-width: 10px;
            right: -20px;
            top: -50%;
            transform: translateY(-50%);
            border-color: transparent transparent transparent ${dark.aux};
          }
        }
    }
    
`
const StyleImage = styled.div`
    flex: auto;
    height: 500px;
    object-fit:cover;

    @media screen and (max-width: 960px){
      width: 100%;
      height: 420px;
      transform: translate(0vh, -40px);
    }

    @media screen and (max-width: 490px){
        transform: translate(0vh, -20px);
    }

    
`
export const LogoElement = () => {
    return <Fade cascade>
        <Container>
            <StyleImage>
                <img src={"https://african.business/wp-content/uploads/2023/08/adobestock_65593948-1200x795.jpeg"} alt="" />
            </StyleImage>
            <StyleLogo>
                <img src={Chin} alt="Logo" />
               {/* <span className="continuo">
                    Ler mais
                    <div className="arrow">

                    </div>
                </span>*/}
            </StyleLogo>
        </Container>;
    </Fade>
}

