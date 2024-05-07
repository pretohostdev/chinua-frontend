import { FaFacebookF, FaTiktok, FaWhatsapp, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Container } from './styles';
import { Link } from 'react-router-dom';

export const Icons = () => {
    return <Container>
        <Link to={"https://bit.ly/ndembo"} >
            <FaFacebookF />
        </Link>
        <Link to={"https://bit.ly/3cHinuA"} >
            <FaWhatsapp />
        </Link>
        <Link to={"https://bit.ly/Ch_ndemb"} > 
            <FaTiktok />
        </Link>
        <Link to={"http://bit.ly/instag_chinua13"} >
            <FaInstagram />
        </Link>
        <Link to={"https://bit.ly/chinua-ndembo"}>
            <FaLinkedinIn />
        </Link>
        <Link to={"http://bit.ly/twitter_ndembo"}>
            <FaTwitter />
        </Link>
    </Container>;
}
