
import { Container } from './styles';
import Logo from "../../../../assets/img/logo_oficial.png"
import { useRef } from 'react';


export const Sobre = () => {
 // const sobreRef = useRef("about");

  return <>
    <Container  ref={sobreRef}  id='about'>
      <div className="top">
        <div className="container">
          <div className="element primario">
           {/* <div className="element-bottom">
              <h5 className="title">
                Intermediações
              </h5>
              <span className='inter'>
                <span>Imobiliário</span>
                <span> <span className="dot">.</span> Negócio</span>
                <span> <span className="dot">.</span> Automóveis</span>
              </span>
            </div>*/}
            <div className="element-second">
              <h2 className='element-second-title'>
                Quem somos:
              </h2>
              <p  style={{color:"#121212"}}>
                Somos a <span  style={{color:"#121212"}} className="empresa">Chinua Ndembo</span>,
empresa de 
prestadora de serviços, voltada para o setor de 
intermediação diversas, fundada em 2021, 
com o objetivo de facilitar o processo de 
compra e venda de bens e serviços, 
proporcionando segurança e eficiência para 
todas as partes envolvidas.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="bottom">
        <div className="container-flex">
          <div>
            <div  className='logo'>
              <img     src={Logo} />
            </div>
          </div>
          <div  className='container'>
          <div className="element primario">
            <div className="element-bottom">
            </div>
            <div className="element-second">
              <h2 className='element-second-title'>
                Missão:
              </h2>
              <p>
                Nossa missão é facilitar negócios bem-sucedidos, conectando compradores e vendedores, com eficiência e eficácia. Estamos comprometidos em fornecer soluções personalizadas, aprimorando nossa expertise e tecnologia, para nos tornamos um parceiro confiável para nossos clientes.
              </p>
            </div>
          </div>
          <div className="element primario">
            <div className="element-bottom">
            </div>
            <div className="element-second">
              <h2 className='element-second-title'>
                Visao:
              </h2>
              <p>
                Nossa missão é facilitar negócios bem-sucedidos, conectando compradores e vendedores, com eficiência e eficácia. Estamos comprometidos em fornecer soluções personalizadas, aprimorando nossa expertise e tecnologia, para nos tornamos um parceiro confiável para nossos clientes.
              </p>
            </div>
          </div>
          </div>
          

        </div>
      </div>
    </Container>;

  </>
}
