
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';



export const ItemProducto = (props) => {
    return (
        <Container className={props.prodClass}>
            <img src={props.src} alt={props.alt} rel="noprefered" />
            <span className='title-product'>{props.title}  <span className='product-year'>{props.year}</span></span>
            <span className="details">{props.velocity}<span className="velocity"> / {props.price}</span></span>
            <Link to="/">
                <Button theme="secondary">Ver tudo</Button>
            </Link>
        </Container>
    )
}


ItemProducto.propTypes
