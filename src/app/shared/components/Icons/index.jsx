import { FaFacebookF, FaTiktok, FaWhatsapp, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Container } from './styles';
import { Link } from 'react-router-dom';

export const Icons = () => {
    return <Container>
        <Link>
            <FaFacebookF />
        </Link>
        <Link>
            <FaWhatsapp />
        </Link>
        <Link>
            <FaTiktok />
        </Link>
        <Link>
            <FaInstagram />
        </Link>
        <Link>
            <FaLinkedinIn />
        </Link>
        <Link>
            <FaTwitter />
        </Link>
    </Container>;
}
