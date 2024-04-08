

import { Container } from './styles';

export const NavItemC = (props) => {
    return (
        <Container onClick={props.onClick}>{props.text}</Container>
    );
}


NavItemC.propTypes