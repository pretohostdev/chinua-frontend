
import { SlidesContent } from "./SlidesContent"
import { Container } from "./styles"
import Slide001 from './../../../../assets/img/slide001.jpg'
import Slide002 from './../../../../assets/img/slide002.jpg'
import Slide003 from './../../../../assets/img/slide003.jpg'
import { Controller } from "../Controller"
import styled from "styled-components"
import dark from "../../styles/theme/dark"


const ControllerStyle = styled.div`

    display: flex;
    align-items: center;
    column-gap: 1rem;
    flex-direction: row;
    position: absolute;
    z-index: 10;
    bottom: 100px;
    right: 200px;  

    @media screen and (max-width: 960px){
        bottom: 50px;
        right: 180px;
    }
    @media screen and (max-width: 490px){
        bottom: 40px;
        right: 140px;
    }



    #prev,
    #next {
      border-radius: 8px 0px 0px 0px ;
      background: transparent;
      border-style: solid;
      border-width: 2px;
      position: relative;
      width: 25px;
      height: 25px;
      transform: rotate(-45deg);
      transition: all 0.4s;
      border-color: ${dark.text} transparent transparent ${dark.text};
      cursor: pointer;
      &:hover {
        border-color: ${dark.aux} transparent transparent
          ${dark.aux};
      }

      @media screen and (max-width: 490px){
        width: 20px;
        height: 20px;
        }
    }

    #prev {
      margin-right: -25px;
      transform: rotate(-45deg);
    }
    #next {
      margin-left: -25px;
      transform: rotate(135deg);
    }
    
`
export const Slides = () => {
    let lastIndex = 0;
    const slides = [
        {
            src: Slide001,
            alt: 'Primeiro slide content'
        },
        {
            src: Slide002,
            alt: 'Segundo  slide content'
        },
        {
            src: Slide003,
            alt: 'Terceiro slide content'
        },
    ]

    const plusSlide = (n) => {

        slideShow(lastIndex += n)
    }

    const slideShow = n => {

        const mainContainer = document.querySelector('#slide-container')
        const images = Array.from(mainContainer.querySelectorAll('.slide-image'))
        if (n > slides.length) {
            lastIndex = 1;
        }
        if (n < 1) {
            lastIndex = slides.length
        }
       
        mainContainer.style.transform = `translateX(-${(lastIndex - 1) * images[lastIndex - 1].offsetWidth}px)`;

    }
    // const slidesCurrent = (n) => {

    // }

    return (

        <Container>

            <SlidesContent slides={slides} id="slide-container" className="slide-image" />

            <ControllerStyle>
                <a id="prev" onClick={() => plusSlide(-1)}></a>
                {
                    slides.map((image, index) => {
                        return <Controller key={index} src={image.src} alt={image.alt}  pos={index} />
                    })
                }

                <a id="next" onClick={() => plusSlide(+1)}></a>
            </ControllerStyle>
        </Container>


    )
}

