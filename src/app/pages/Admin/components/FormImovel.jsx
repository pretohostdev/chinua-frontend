import { useContext, useRef, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { ContainerLabelInputUploadImage,Form,
    ContainerLabelInput,

} from "../admin"




export const FormImovel = ()=>{
        const {registarImovel}=useContext(UserContext)
        const [files, setFiles] = useState([])
        const inputArea=useRef("")
        const inputPreco=useRef("")
        const inputLocalizacao=useRef("")
        const inputTipo=useRef("")
        const inputImovel=useRef("")
        const inputDescricao=useRef("")
    
    
    
        const handleSubmit = (e)=>{
            e.preventDefault();
    
            const formData = new FormData();
    
            formData.append('nomeDoImovel',inputImovel.current.value);
            formData.append('localizacao',inputLocalizacao.current.value);
            formData.append('area',inputArea.current.value);
            formData.append('tipo',inputTipo.current.value);
            formData.append('preco',inputPreco.current.value);
            formData.append('descricao',inputDescricao.current.value);
    
            Object.values(files).forEach( (file) => {
            formData.append('image', file);
    
            });
    
            try {
                console.log(inputPreco.current.value);
                console.log(inputLocalizacao.current.value);
                console.log(inputTipo.current.value);
                console.log(inputLocalizacao.current.value);
                registarImovel(formData)
                
                alert("Imovel adicionado com sucesso");
                
            } catch (error) {
                alert("Não foi possivel cadastrar a fazenda ou tera")
            }
        }
        const setImage = (files) => {
            setFiles(files)
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
                <input ref={inputImovel}  type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Preço do imovel</label>
                <input  ref={inputPreco} type="number" placeholder="" required />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Area</label>
                <input  ref={inputArea} type="text" placeholder="" required />
            </ContainerLabelInput>
           
            <ContainerLabelInput>
                <label>Tipo de Imovel</label>
               <select   ref={inputTipo}  id="fuel"  required>
                    <option value="Vivenda">Vivenda</option>
                    <option value="Apartamento" >Apartamento</option>
                    <option value="Casa" >Casa</option>
                </select>
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Localização do imovel</label>
                <input ref={inputLocalizacao}  type="text" placeholder="" required />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Descrição do imovel</label>
                <input  ref={inputDescricao} type="text" placeholder= "" required  />
            </ContainerLabelInput>
           
           
        <button type="submit" className="btn btn-success btn-block mt-4 mb-4" >Adicionar imovel</button>
        </Form>

    )
}