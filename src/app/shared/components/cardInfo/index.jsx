import { ContactoInfos, ContainerConactos, ContainerFooterOK, ContainerInformation, ContainerTitle, ContainerTitleFaleConnosco } from "./style";







 const ChinuaNdemboBanerInfo= () => {





    return (


        <ContainerInformation
        
        >

            <ContainerTitleFaleConnosco>
                <a href="tel:+244923845779"  >Faça já a sua solicitação</a>
            </ContainerTitleFaleConnosco>

            <ContainerConactos>
                <ContactoInfos>
                    <ContainerTitle>
                        <h3>Endereços</h3>
                    </ContainerTitle>
                    <a href="mailto:comercial@chinuandembo.ao"  >comercial@chinuandembo.ao</a>
                    <a href="chinuandembo.ao" >www.chinuandembo.ao</a>
                    <a href="https://bit.ly/pagina_chinua" >Facebook</a>
                </ContactoInfos>

                <ContactoInfos>
                    <ContainerTitle>
                        <h3>Telefones</h3>
                    </ContainerTitle>
                    <a href="tel:+244923845779" >923 845 779</a>
                  <a  href="tel:+244939593385" >939 593 385</a>
                   <a href="tel:+244957427090"  >957 427 090</a>
                </ContactoInfos>
            </ContainerConactos>
            <ContainerFooterOK>

               <p>Localização: <span>
                
                 Viana - Luanda Sul / Avenida 11 de Novembro
                (4 campos, frente a garrafeira Boaventura)
                </span></p>
                <h3>🫱🏾‍🫲🏾Ligando Oportunidades, Concretizando Negócios🫱🏾‍🫲🏾</h3>

            </ContainerFooterOK>

        </ContainerInformation>
    )
}



export default ChinuaNdemboBanerInfo;