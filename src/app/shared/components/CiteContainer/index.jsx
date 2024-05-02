
import { Container } from './styles';

import { Slides } from '../Slides';

import { Button } from '../Button';
import { Box } from '../Box';
import styled from 'styled-components';
import dark from '../../styles/theme/dark';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';


const CiteStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px .6rem;
    position:relative;
    z-index: 4;

    p{
        color:white;
        line-height: 1.6;
        padding: .8rem;
        font-size: 1.2rem;
        font-weight: 400!important;
        position: relative;
        z-index: 100;
    }
    button{
        @media screen and (max-width: 600px){
           color: ${dark.text};
           background-color: ${dark.aux};
        }
     
    }
`

const StyleText = styled.h1`
    width: 450px;
    height: auto;
    color: ${dark.text};
    position: absolute;
    left: 50%;
    top: 22%;
    transform: translateY(-22%);
    font-weight: 500;
    font-size: 3.4rem;
    z-index: 4;

    @media screen and (max-width: 960px){
        left: 30%;
        top: 25%;
        font-size: 2.8rem;
        transform: translateY(-25%);
    }
    @media screen and (max-width: 600px){
        left: 25%;
        top: 30%;
        font-size: 2.6rem;
        transform: translateY(-30%);
    }
    @media screen and (max-width: 490px){
        left: 12%;
        top: 30%;
        font-size: 1.6rem;
        transform: translateY(-30%);
    }

`
const Text = () => {
    return <StyleText>
        LIDER DE<br />
        INTERMEDIAÇÕES EM<br />
        ANGOLA
    </StyleText>
}



const Cite = () => {
    return (
        <CiteStyle>
            <Box />
            <Text />
            <p>
                Lider em intermediações <br />
                Carros | Fazendas | Imoveis
            </p>

            <div style={{position:"relative", width:300}} >

            <Carousel
             additionalTransfrom={0}
             arrows={false}
             autoPlay
             autoPlaySpeed={3000}
             centerMode={false}
             className=""
             containerClass="container-with-dots"
             dotListClass=""
             draggable
             focusOnSelect={false}
             infinite
             itemClass=""
             keyBoardControl
             minimumTouchDrag={80}
             pauseOnHover
             renderArrowsWhenDisabled={false}
             renderButtonGroupOutside={false}

        
             
             renderDotsOutside={false}
             responsive={{
               desktop: {
                 breakpoint: {
                   max: 3000,
                   min: 1024
                 },
                 items: 1,
                 partialVisibilityGutter: 0
               },
               mobile: {
                 breakpoint: {
                   max: 464,
                   min: 0
                 },
                 items: 1,
                 partialVisibilityGutter: 0
               },
               tablet: {
                 breakpoint: {
                   max: 1024,
                   min: 464
                 },
                 items: 1,
                 partialVisibilityGutter: 0
               }
             }}
             rewind={false}
             rewindWithAnimation={false}
             rtl={false}
             shouldResetAutoplay
             showDots={false}
             sliderClass=""
             slidesToSlide={1}
             swipeable
            >
            <Button theme='secondary'>
                <Link to={"/carros"}>
                Carros
                </Link>
            </Button>
            <Button theme='secondary'>
                <Link to={"/terras"}>
                Fazendas
                </Link>
            </Button>
            <Button theme='secondary'>
                <Link to={"/imoveis"}>
                Imoveis
                </Link>
            </Button>
            </Carousel>
            </div>
        </CiteStyle>
    );
}

export const CiteContainer = () => {
    return (
        <Container>
            <Cite />
            <Slides />

        </Container>
    );
}
