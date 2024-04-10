
import Carro from '../../../../assets/img/carro_.jpg'
import Seat from '../../../../assets/img/seat.jpg'
import Room from '../../../../assets/img/slide001.jpg'
import Room_1 from '../../../../assets/img/slide002.jpg'
import Room_3 from '../../../../assets/img/slide003.jpg'
import Home from '../../../../assets/img/home.jpg'
import Galeria1 from '../../../../assets/img/galeria (1).jpg'
import Galeria2 from '../../../../assets/img/galeria (2).jpg'
import Galeria3 from '../../../../assets/img/galeria (3).jpg'
import Galeria4 from '../../../../assets/img/galeria (4).jpg'
import Galeria5 from '../../../../assets/img/galeria (5).jpg'
import Galeria6 from '../../../../assets/img/galeria (6).jpg'
import Galeria7 from '../../../../assets/img/galeria (7).jpg'
import Galeria8 from '../../../../assets/img/galeria (8).jpg'
import Galeria9 from '../../../../assets/img/galeria (9).jpg'
import Galeria10 from '../../../../assets/img/galeria (10).jpg'
import Galeria11 from '../../../../assets/img/galeria (11).jpg'



import { Container } from './styles';
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react'
import { CImage, CModal, CModalBody, CModalFooter} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Button } from '../Button'
import { FaTimes } from 'react-icons/fa'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const StyleImages = styled.div`
   
    width:100%;
    height:380px!important;

`
const Image = (props) => {

    return <StyleImages style={{ '--i': props.id }} onClick={props.onClick}>
        <img src={props.src} alt={props.alt} />
    </StyleImages>
}
Image.propTypes



function Galeria() {
    const [visible, setVisible] = useState(false)
    const [imgModal, setImgModal] = useState('')

    const openModal = (e) => {
        setVisible(!visible);
        setImgModal(e.target.src);
    }

    const images = [
        {
            src: Carro,
            alt: 'Carro'
        },
        {
            src: Seat,
            alt: 'seat'
        },
        {
            src: Room,
            alt: 'room'
        },
        {
            src: Room_1,
            alt: 'Room 1'
        },
        {
            src: Room_3,
            alt: 'Room 3'
        },
        {
            src: Home,
            alt: 'Home'
        },
        {
            src: Galeria1,
            alt: 'Home'
        },
        {
            src: Galeria2,
            alt: 'Home'
        },
        {
            src: Galeria3,
            alt: 'Home'
        },
        {
            src: Galeria4,
            alt: 'Home'
        },
        {
            src: Galeria5,
            alt: 'Home'
        },
        {
            src: Galeria6,
            alt: 'Home'
        },
        {
            src: Galeria7,
            alt: 'Home'
        },
        {
            src: Galeria8,
            alt: 'Home'
        },
        {
            src: Galeria9,
            alt: 'Home'
        },
        {
            src: Galeria10,
            alt: 'Home'
        },
        {
            src: Galeria11,
            alt: 'Home'
        },
    ]

    return <>
        <CModal
            alignment="center"
            fullscreen
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="VerticallyCenteredExample"
        >
            <CModalBody>
                <CImage fluid style={{minHeight: '100vh'}} src={imgModal} />
            </CModalBody>
            <CModalFooter>

                <Button theme='primary' onClick={() => setVisible(false)}>
                    <FaTimes />
                </Button>

            </CModalFooter>
        </CModal>
        <Container>



            <Carousel responsive={responsive}>
                {
                    images.map((image, index) => (<Image src={image.src} alt={image.alt} key={index} id={index} onClick={(e) => openModal(e)} />))

                }

            </Carousel>;




        </Container>;
    </>
}

export default Galeria;