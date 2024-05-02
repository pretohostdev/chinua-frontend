import { 
    ConatinerCardProduto,ContainerNomeDoProduto,ConatinerButton,
    ContainerImage,ContainerPrice,ContainerDiscription,
    ContainerFlexTitle
  } from "./style"
  import IconDimesao from "./assets/icons_fazenda/measurement.png"
  import IconLocalizacao from "./assets/icons_fazenda/pin-de-localizacao.png"
import FormatarMoeda from "../../utils/formatarMoeda"
  
  
  
  
  export const NewCardImovel=({ 
    nomeDoImovel,
    area,
    preco,status,tipo,
    localizacao,
    image,
    id
})=>{
      return(
          <ConatinerCardProduto
          style={{height:"445px"}}
          >
          <ContainerImage  status={status} >
              <img src={image} width={250} height={250}   />
                {
                  status==="Vendido" && <h3>Vendido</h3>  
                }
                 {
                  status==="Alugado" && <h3>Alugado</h3>  
                }
          </ContainerImage>
          <ContainerNomeDoProduto>
            <p>Nome: {nomeDoImovel}</p>
          </ContainerNomeDoProduto>
    
          <ContainerNomeDoProduto>
            <p>Tipo: {tipo}</p>
          </ContainerNomeDoProduto>
          <ContainerPrice>
              <p>Preco: <span>{FormatarMoeda(preco,2,"AOA")}</span></p>
          </ContainerPrice>
          <ContainerPrice>
                  <p>Ref: <span>{id}</span></p>
              </ContainerPrice>
          <ContainerDiscription>
             <div>
                <img src={IconLocalizacao}   />
                <span>{localizacao}</span>
             </div>
             <div>
                <img src={IconDimesao}   />
                <span>{area}</span>
             </div>
          </ContainerDiscription>
          <ConatinerButton   to={`/produto/imovel/${id}`}>
                Ver mais
          </ConatinerButton>
    </ConatinerCardProduto>
      )
  }