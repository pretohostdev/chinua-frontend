import { 
  ConatinerCardProduto,ContainerNomeDoProduto,ConatinerButton,
  ContainerImage,ContainerPrice,ContainerDiscription,
  ContainerFlexTitle
} from "./style"
import IconDimesao from "./assets/icons_fazenda/measurement.png"
import IconLocalizacao from "./assets/icons_fazenda/pin-de-localizacao.png"




export const NewCardTerrenoFazenda=({localizacao,image,dimensao,preco,tipo})=>{
    return(
        <ConatinerCardProduto
        style={{height:"380px"}}
        >
        <ContainerImage>
            <img src={image} width={250} height={250}   />
        </ContainerImage>
        <ContainerNomeDoProduto>
          <p>Tipo: {tipo}</p>
        </ContainerNomeDoProduto>
        <ContainerPrice>
            <p>Preco: <span>{preco}</span>AOA</p>
        </ContainerPrice>
        <ContainerDiscription>
           <div>
              <img src={IconLocalizacao}   />
              <span>{localizacao}</span>
           </div>
           <div>
              <img src={IconDimesao}   />
              <span>{dimensao}</span>
           </div>
        </ContainerDiscription>
        <ConatinerButton   to={"/produto/detalhes/5"}>
              Ver mais
        </ConatinerButton>
  </ConatinerCardProduto>
    )
}