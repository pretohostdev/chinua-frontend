
import { Container } from './styles';

export const SlideImage = (props) => {
    return (
        <Container className={props.propClass}>
            <img src={props.src} alt={props.alt} />
        </Container>
    );
}

SlideImage.propTypes