
import { Container } from './styles';



export const Sobre = () => {
  return <>
    <Container id='about'>
      <div className="top">
        <div className="container">
          <div className="element primario">
            <div className="element-bottom">
              <h5 className="title">
                Intermediações
              </h5>
              <span className='inter'>
                <span>Imobiliário</span>
                <span> <span className="dot">.</span> Negócio</span>
                <span> <span className="dot">.</span> Automóveis</span>
              </span>
            </div>
            <div className="element-second">
              <h2 className='element-second-title'>
                Quem somos:
              </h2>
              <p>
                Somos a <span className="empresa">Chinua Ndembo</span>, empresa de prestação de serviços, voltada para o sector de intermediação de negócios, fundada em 2021, com a sede em Viana -  Luanda Sul, Desde o início, nossa empresa tem se dedicado a conectar compradores e vendedores, tornando-se facilmente bem-sucedidas em diversos sectores.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="bottom">
        <div className="container">


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

        </div>
      </div>
    </Container>;

  </>
}
