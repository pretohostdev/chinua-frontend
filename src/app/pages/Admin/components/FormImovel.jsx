import { ContainerLabelInputUploadImage,Form,
    ContainerLabelInput,

} from "../admin"




export const FormImovel = ()=>{


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("teste")
    }

    return(
        <Form onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Adicionar Imovel</h2>
            <ContainerLabelInputUploadImage>
                <label className="font-bold " >Imagens dos Imovel</label>
                <input      type="file" accept="image/jpeg, image/png, image/gif"  multiple   onChange={(e)=>{setImage( e.target.files)}}  />
            </ContainerLabelInputUploadImage>

            <ContainerLabelInput>
                <label>Nome do imovel</label>
                <input type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Preço do imovel</label>
                <input type="text" placeholder="" required />
            </ContainerLabelInput>
      
           
            <ContainerLabelInput>
                <label>Tipo de Imovel</label>
               <select id="fuel"  required>
                    <option value="Vivenda">Vivenda</option>
                    <option value="Apartamento" >Apartamento</option>
                    <option value="Casa" >Casa</option>
                </select>
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Localização do imovel</label>
                <input type="text" placeholder="" required />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Descrição do imovel</label>
                <input type="text" placeholder= "" required  />
            </ContainerLabelInput>
           
           
        <button type="submit" className="btn btn-success btn-block mt-4 mb-4" >Adicionar imovel</button>
        </Form>

    )
}