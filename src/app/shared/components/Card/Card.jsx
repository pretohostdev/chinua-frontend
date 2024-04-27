import { ConatinerCardProduto,ContainerNomeDoProduto,ConatinerButton,ContainerImage,ContainerPrice,ContainerDiscription } from "./style"
import DiscoDeFreio from "./assets/icons_carro/disco-de-freio.png"
import MotorDeCarro from "./assets/icons_carro/motor-de-carro.png"
import TipoDeCombustivel from "./assets/icons_carro/posto-de-gasolina.png"


export const NewCardCarro=({nomeDoCarro,price,image,tipoDefreio,tipoMotor,tipoCombustivel})=>{
    return(
        <ConatinerCardProduto>
              <ContainerImage>
                  <img src={image} width={250} height={250}   />
              </ContainerImage>
              <ContainerNomeDoProduto>
                <p>{nomeDoCarro}</p>
              </ContainerNomeDoProduto>
              <ContainerPrice>
                  <p>Preco: <span>{price}</span>AOA</p>
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

              <ConatinerButton   to={"/produto/detalhes/5"}>
                    Ver mais
              </ConatinerButton>
        </ConatinerCardProduto>
    )
}
