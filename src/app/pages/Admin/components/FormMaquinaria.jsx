import React, { useContext, useRef, useState } from "react"

import {ContainerLabelInput,
  ContainerLabelInputUploadImage, Form

} from "../admin"
import { UserContext } from "../../../context/UserContext"





export const FormMaquinaria = () => {
const [files, setFiles] = useState([])
const inputPrecoMaquina=useRef("")
const inputTipoCombustivel=useRef("")
const inputTipoMotor=useRef("")
const inputTipoFreio=useRef("")
const inputTipoDeMaquinaria=useRef("")
const inputEstadoDeConversao=useRef("")
const inputNomeDaMaquinaria=useRef("")

const {registarMaquinaria}=useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    
    
    const formData = new FormData();



    formData.append('price', inputPrecoMaquina.current.value);
    formData.append('tipoCombustivel', inputTipoCombustivel.current.value);
    formData.append('tipoMotor', inputTipoMotor.current.value);
    formData.append('tipoDefreio', inputTipoFreio.current.value);
    formData.append('tipoDeMaquinaria', inputTipoDeMaquinaria.current.value);
    formData.append('estadoDeConversao', inputEstadoDeConversao.current.value);
    formData.append('nomeDaMaquinaria', inputNomeDaMaquinaria.current.value);
    

    Object.values(files).forEach( (file) => {
        formData.append('image', file);
      });
      
      
      
      try {

      registarMaquinaria(formData)

      
      inputPrecoMaquina.current.value="";
      inputTipoCombustivel.current.value="";
      inputTipoMotor.current.value="";
      inputTipoFreio.current.value="";

    } catch (error) {
      console.log(error)
    }



  }

  const setImage = (files) => {
    setFiles(files)
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Adicionar Maquinarias</h2>
                        <ContainerLabelInputUploadImage>
                            <label className="font-bold " >Imagens da Maquinaria</label>
                            <input      type="file" accept="image/jpeg, image/png, image/gif"  name="uploadImages"  multiple   onChange={(e)=>setImage( e.target.files)}  />
                        </ContainerLabelInputUploadImage>

                       <ContainerLabelInput>
                            <label>Nome da maquinaria</label>
                            <input  ref={inputNomeDaMaquinaria} type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Preço da maquinaria</label>
                            <input ref={inputPrecoMaquina} type="text" placeholder="" required />
                        </ContainerLabelInput>
                  
                       
                        <ContainerLabelInput>
                            <label>Tipo de combustível</label>
                           <select  ref={inputTipoCombustivel} id="fuel"  required>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Diesel" >Diesel</option>
                                <option value="Etanol" >Etanol</option>
                                <option value="Gás Natural" >Gás Natural</option>
                                <option value="Flex" >Flex</option>
                                <option value="Híbrido" >Hibrído</option>
                                <option value="Elétrico" >Eléctrico</option>
                            </select>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Estado de concervação</label>
                           <select  ref={inputEstadoDeConversao} id="fuel"  required>
                                <option value="Novo">Novo</option>
                                <option value="Usado" >Usado</option>
                                <option value="Em bom estado" >Em bom estado</option>
                                <option value="Antigo" >Antigo</option>
                              
                            </select>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Tipo de Motor</label>
                            <input ref={inputTipoMotor}  type="text" placeholder="" required />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Tipo de  Maquinaria</label>
                            <input ref={inputTipoDeMaquinaria}  type="text" placeholder="" required />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Tipo de Freio</label>
                            <select ref={inputTipoFreio}  id="freio" required  >
                                <option value="Freio a Disco">Freio a Disco</option>
                                <option value="Freio a Tambor">Freio a Tambor</option>
                                <option value="Freio ABS">Freio ABS</option>
                                <option value="Freio EBD">Freio EBD</option>

                            </select>
                       </ContainerLabelInput>
                       
                       
                    <button type="submit" className="btn btn-primary" >Adicionar carro</button>
      </Form>
    </>
  )
}
