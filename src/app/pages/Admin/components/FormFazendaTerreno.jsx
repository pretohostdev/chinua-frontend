import {Form,ContainerLabelInput,ContainerLabelInputUploadImage,
} from "../admin"




export const FormFazendaTerreno = ()=>{



    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("teste")
    }

    return(
        <Form onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Adicionar Fazenda Terreno</h2>
            <ContainerLabelInputUploadImage>
                <label className="font-bold " >Imagens da fazenda ou terreno</label>
                <input      type="file" accept="image/jpeg, image/png, image/gif"  multiple   onChange={(e)=>{setImage( e.target.files)}}  />
            </ContainerLabelInputUploadImage>

            <ContainerLabelInput>
                <label>Nome do imovel</label>
                <input type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
            </ContainerLabelInput>           
            <ContainerLabelInput>
                <label>Tipo Fazenda Terreno </label>
               <select id="fuel"  required>
                    <option value="Fazenda">Fazenda</option>
                    <option value="Terreno">Terreno</option>
                </select>
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Localização do imovel</label>
                <input type="text" placeholder="" required />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Descrição da fazenda ou terreno</label>
                <input type="text" placeholder= "" required  />
            </ContainerLabelInput>
        <button type="submit" className="btn btn-success btn-block mt-4 mb-4" >Adicionar Fazenda Terreno</button>
        </Form>

    )
}