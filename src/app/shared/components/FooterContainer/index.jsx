
import styled from 'styled-components';
import { Logo } from '../Logo'
import constroi from '../../../../assets/img/constroi.png'
import party from '../../../../assets/img/parts.png'
import taxi from '../../../../assets/img/taxi.png'
import repair from '../../../../assets/img/repair.png'
import { FaAt, FaCopyright, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import dark from '../../styles/theme/dark';

const Style = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 1rem 0px;

  

    .container{
      width: 100%;
      max-width: 90vw;
      margin: 0 auto;  
  }
  &:last-child{
    border-top: 2px solid ${dark.auxOpacity};
  }

  .footer-bottom{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .1rem;
      color: ${dark.text};

      .empresa{
        color: ${dark.aux};
        font-weight: bolder;
        margin: auto .2rem;
      }

      a{
        margin: auto .1rem;
        font-size: 1rem;
        color:#daa520;
        font-weight: bolder;
      }
    }
  }

  .footer-info{
    width: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px){
      flex-direction: column;
      gap: 4rem;
    }

    .footer-logos{
      width: 100%;
      display: flex;
      @media screen and (max-width: 1200px){
        justify-content: space-between;
        column-gap: 1.6rem;
      }
      .logo_{
        border: 1px solid ${dark.aux};
      }
    }
  }
`

const StyleServices = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  align-self: flex-end;
  gap: .8rem;
  transform: translate(-1vw,6vh);

  @media screen and (max-width: 1200px){
    transform: unset!important;
  }
  img{
    width: 45px;
    height: 45px;
  }
`

const Services = (props) => {
  return (
    <StyleServices>
      {
        props.services.map((service, index) => (<img src={service.src} alt={service.alt} key={index} />))
      }
    </StyleServices>
  )
}

Services.propTypes
const StyleEndereco = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  row-gap: .5rem;
  column-gap: .4rem;
  @media screen and (max-width: 960px){
    flex-direction: column;
    margin: .4rem auto;
  }

  .endereco{
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: .8rem;
     
    .endereco-title{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .4rem;
      font-weight: bold;
      color: ${dark.aux};
    }

    .endereco-body{
      color: ${dark.text};
      font-weight: normal!important;
      text-aling: center;
       
    }
  }
  
`

const Endereco = (props) => {
  return <div className="endereco">

    <div className="endereco-title">
      {props.icon} <span>{props.name}</span>
    </div>
    <div className="endereco-body">
      {props.value}
    </div>
  </div>

}

Endereco.propTypes
const Enderecos = (props) => {
  return (
    <StyleEndereco>
      {
        props.enderecos.map((endereco, index) => (<Endereco key={index} icon={endereco.icon} name={endereco.name} value={endereco.value} />))
      }
    </StyleEndereco>
  )

}
Enderecos.propTypes

const MenuStyle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
   
  gap: .4rem;
  align-items: flex-end;
  padding: .4rem;

  a{
    color: ${dark.text};
    text-align: right;
    width: 100%;
    font-weight: 400!important;
    transition: all .4s;

    @media screen and (max-width: 1200px){
      text-align: center;
    }

    &:hover{
      color: ${dark.aux};
    }

  }
`

const Menus = (props) => {
  return <MenuStyle>
    {
      props.menus.map((menu, index) => (<Link key={index} to={menu.to}>{menu.value}</Link>))
    }
  </MenuStyle>
}

Menus.propTypes
function FooterContainer() {

  const services = [
    {
      src: constroi,
      alt: 'Service Construção'
    },
    {
      src: taxi,
      alt: 'Service Taxi'
    },
    {
      src: repair,
      alt: 'Service Reparação'
    },
    {
      src: party,
      alt: 'Service Festa'
    },
  ]
  const enderecos = [
    {
      icon: <FaPhoneAlt />,
      name: 'Telefone',
      value: '+244 939 593 385'
    },
    {
      icon: <FaAt />,
      name: 'E-mail',
      value: 'geral@chinuandembo.ao'
    },
    {
      icon: <FaMapMarkedAlt />,
      name: 'Endereço',
      value: 'Viana, Luanda Sul'
    },
  ]
  const menus = [
    {
      value: 'Escritório',
      to: '#office'
    },
    {
      value: 'Sobre',
      to: '#about'
    },
    {
      value: 'O que falam',
      to: '#testimonials'
    },
    {
      value: 'Contacto',
      to: '#contacto'
    },
  ]
  return <>
    <Style>
      <div className="container">
        <div className="footer-info">
          <div className='footer-logos'>
            <Logo />
            <Services services={services} />
          </div>
            <Enderecos enderecos={enderecos} />
          
            <Menus menus={menus} />
          
        </div>
      </div>
    </Style>;

    <Style>
      <div className="container">
        <div className="footer-bottom">
          <p> <FaCopyright /> {new Date().getFullYear()} <span className="empresa">Chinua</span>. Todos Os Direitos Reservados <a href="https://chinuandembo.ao/" target='__self'> Chinua Ndembo</a></p>
        </div>
      </div>
    </Style>;

  </>

}

export default FooterContainer;