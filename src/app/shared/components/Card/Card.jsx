import { ConatinerCardProduto,ContainerNomeDoProduto,ConatinerButton,ContainerImage,ContainerPrice,ContainerDiscription } from "./style"
import DiscoDeFreio from "./assets/icons_carro/disco-de-freio.png"
import MotorDeCarro from "./assets/icons_carro/motor-de-carro.png"
import TipoDeCombustivel from "./assets/icons_carro/posto-de-gasolina.png"
import FormatarMoeda from "../../utils/formatarMoeda"


export const NewCardCarro=({nomeDoCarro,price,image,tipoDefreio,tipoMotor,tipoCombustivel,status,id})=>{
    return(
        <ConatinerCardProduto>
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
                <p>{nomeDoCarro}</p>
              </ContainerNomeDoProduto>
              <ContainerPrice>
                  <p>Preco: <span>{FormatarMoeda(price,2)}</span></p>
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

              <ConatinerButton   to={`/produto/detalhes/${id}`}>
                    Ver mais
              </ConatinerButton>
        </ConatinerCardProduto>
    )
}
