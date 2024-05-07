
import { Container } from './styles';
import logoOficial from './../../../../assets/img/logo_oficial.png'
import { Link } from 'react-router-dom';
export const Logo = ({urlLogo}) => {

    return <Container  className='logo_'>
        <div className="ghost"></div>
        <Link to={"/"} >
            <h1>
                <img src={urlLogo?urlLogo:logoOficial} alt='Logotipo Oficial' rel='noreferred' />
            </h1>

        </Link>

    </Container>
}
