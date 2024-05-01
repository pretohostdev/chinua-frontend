import { useContext, useRef, useState } from "react";
import {Form,ContainerLabelInput,ContainerLabelInputUploadImage,
} from "../admin"
import { UserContext } from "../../../context/UserContext";




export const FormFazendaTerreno = ()=>{
    const {registarFazenda}=useContext(UserContext)
    const [files, setFiles] = useState([])
    const inputDimensao=useRef("")
    const inputPreco=useRef("")
    const inputLocalizacao=useRef("")
    const inputTipo=useRef("")



    const handleSubmit = (e)=>{
        e.preventDefault();

        const formData = new FormData();



        formData.append('price', inputPreco.current.value);
        formData.append('dimensao', inputDimensao.current.value);
        formData.append('localizacao', inputLocalizacao.current.value);
        formData.append('tipo', inputTipo.current.value);

        Object.values(files).forEach( (file) => {
        formData.append('image', file);

        });

        try {
            console.log(inputDimensao.current.value);
            console.log(inputPreco.current.value);
            console.log(inputLocalizacao.current.value);
            console.log(inputTipo.current.value);
            console.log(inputLocalizacao.current.value);
            registarFazenda(formData)
            
        } catch (error) {
            alert("Não foi possivel cadastrar a fazenda ou tera")
        }
    }
    const setImage = (files) => {
        setFiles(files)
    }

    return(
        <Form onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Adicionar Fazenda Terreno</h2>
            <ContainerLabelInputUploadImage>
                <label className="font-bold " >Imagens da fazenda ou terreno</label>
                <input       type="file" accept="image/jpeg, image/png, image/gif"  name="uploadImages"  multiple   onChange={(e)=>setImage( e.target.files)}  />
            </ContainerLabelInputUploadImage>

            <ContainerLabelInput>
                <label>Dimensão</label>
                <input ref={inputDimensao} type="text"  required={[true,"dimensão"]} />
            </ContainerLabelInput>           
            <ContainerLabelInput>
                <label>Tipo Fazenda Terreno </label>
               <select ref={inputTipo} id="fuel"  required>
                    <option value="Fazenda">Fazenda</option>
                    <option value="Terreno">Terreno</option>
                </select>
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Localização</label>
                <input  ref={inputLocalizacao}  type="text" placeholder="" required />
            </ContainerLabelInput>
            <ContainerLabelInput>
                <label>Preço</label>
                <input ref={inputPreco}  type="number" placeholder= "" required  />
            </ContainerLabelInput>
        <button type="submit" className="btn btn-success btn-block mt-4 mb-4" >Adicionar Fazenda Terreno</button>
        </Form>

    )
}