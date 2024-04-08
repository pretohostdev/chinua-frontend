

import { SlideImage } from './SlideImage';
import { Container } from './styles';

export const SlidesContent = (props) => {

    return (
       

            <Container id={props.id}>

                {
                    props.slides.map((image, index) => {
                        return <SlideImage propClass={props.className} key={index} src={image.src} alt={image.alt} />
                    })
                }

            </Container>
       

    )
}


SlidesContent.propTypes
