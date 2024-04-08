
import { Container } from './styles';

import { Slides } from '../Slides';

import { Button } from '../Button';
import { Box } from '../Box';
import styled from 'styled-components';
import dark from '../../styles/theme/dark';


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
        LIDER DE  <br />
        SUV  EM <br />
        ANGOLA
    </StyleText>
}



const Cite = () => {
    return (
        <CiteStyle>
            <Box />
            <Text />
            <p>
                Condomínio XXX <br />
                Piscina Privada
            </p>
            <Button theme='secondary'>
                Ver tudo
            </Button>
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
