import { FaAt, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';


import styled from 'styled-components';
import dark from '../../styles/theme/dark';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 20%;
    display: flex;
    flex-flow: column;
    column-gap: .5rem;
    row-gap: .5rem;
     

    @media screen and (max-width: 1200px){
        width: 25%;
    }

    @media screen and (max-width: 960px){
        width: 100%;
     
       }
     
`;

const EnderecoStyle = styled.div`
    width:100%;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    @media screen and (max-width: 960px){
       gap: 1.2rem;
      
        }

    svg{
        color: ${dark.aux};
        font-size: 1.2rem
    }
    .endereco{
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        font-weight: 300;
        @media screen and (max-width: 960px){
           flex-direction: row;
           gap: 1rem;
           justify-content: space-around;
            
           width: 100%;
         
           }

        .endereco-title{
            color: white;
        }
        .endereco-name{
            color: ${dark.aux};
        }
    }
`
const Enderecos = (props) => {
    return (
        <Link  to={props.path} target='_blank' >
        <EnderecoStyle>
            {props.icon}
            <div className="endereco">
                <span className="endereco-title">
                    {props.title}
                </span>
                <span className="endereco-name">
                    {props.name}
                </span>
            </div>
        </EnderecoStyle>
        </Link>
    )
}

Enderecos.propTypes

const enderecos = [
    {
        icon: <FaMapMarkedAlt />,
        title: 'Viana',
        name: 'Luanda-Sul',
        path:"https://maps.app.goo.gl/Siq9GiU4DMNLL9Ud9",
    },
    {
        icon: <FaPhoneAlt />,
        title: 'Telefone',
        name: '+244 939 593 385',
        path:"https://wa.me/+244923845779"
    },
    {
        icon: <FaAt />,
        title: 'E-mail',
        name: 'geral@chinuandembo.ao',
        path:"https://criarmeulink.com.br/u/1715079851"
    }
]

function Endereco() {

    return (
        <Container>
            {
                enderecos.map((endereco, index)=>(
                    <Enderecos key={index} icon={endereco.icon} title={endereco.title} name={endereco.name} path={endereco.path} />
                ))
            }
        </Container>
    )
}

export default Endereco;