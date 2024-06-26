import { ConatinerCardProduto,ContainerNomeDoProduto,ConatinerButton,ContainerImage,ContainerPrice,ContainerDiscription } from "./fazenda"
import DiscoDeFreio from "./assets/icons_carro/disco-de-freio.png"
import MotorDeCarro from "./assets/icons_carro/motor-de-carro.png"
import TipoDeCombustivel from "./assets/icons_carro/posto-de-gasolina.png"
import FormatarMoeda from "../../utils/formatarMoeda"


export const CardMaquina=({
            nomeDaMaquinaria,
            price,
             tipoCombustivel,
            tipoDefreio,
            tipoMotor,
            image,
            tipoDeMaquinaria,
            estadoDeConversao
    ,status,id})=>{
    return(
        <ConatinerCardProduto
            style={{
                height:500
            }}
        >
              <ContainerImage status={status}  >
                  <img src={image}  width={250} height={250}   />
                {
                  status==="Vendido"&& <h3>Vendido</h3>  
                }
                 {
                  status==="Alugado"&& <h3>Alugado</h3>  
                }
              </ContainerImage>
              <ContainerNomeDoProduto>
                <p>{nomeDaMaquinaria}</p>
              </ContainerNomeDoProduto>
              <ContainerPrice>
                  <p>Tipo: <span>{tipoDeMaquinaria}</span></p>
              </ContainerPrice>
              <ContainerPrice>
                  <p>Preco: <span>{FormatarMoeda(price,2)}</span></p>
              </ContainerPrice>
              <ContainerPrice>
                  <p>Estado: <span>{estadoDeConversao}</span></p>
              </ContainerPrice>
              
              <ContainerPrice>
                  <p>Ref: <span>{id}</span></p>
              </ContainerPrice>

              <ContainerDiscription>
                 <div>
                    <img src={DiscoDeFreio}   />
                    <span>{tipoDefreio}</span>
                 </div>
                 <div>
                    <img src={MotorDeCarro}  />
                    <span>{tipoMotor}</span>
                 </div>
                 <div>
                    <img src={TipoDeCombustivel}/>
                    <span>{tipoCombustivel}</span>
                 </div>
              </ContainerDiscription>

              <ConatinerButton   to={`/produto/maquina/${id}`}>
                    Ver mais
              </ConatinerButton>
        </ConatinerCardProduto>
    )
}
