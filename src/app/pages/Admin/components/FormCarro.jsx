import React, { useContext, useRef, useState } from "react"

import {ContainerLabelInput,
  ContainerLabelInputUploadImage, Form

} from "../admin"
import { UserContext } from "../../../context/UserContext"





export const FormCarro = () => {
const [files, setFiles] = useState([])
const inputNomeCarro=useRef("")
const inputPrecoCarro=useRef("")
const inputTipoCombustivel=useRef("")
const inputTipoMotor=useRef("")
const inputTipoFreio=useRef("")

const {registarCarro}=useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    
    
    const formData = new FormData();


    
    
    formData.append('nomeDoCarro', inputNomeCarro.current.value);
    formData.append('price', inputPrecoCarro.current.value);
    formData.append('tipoCombustivel', inputTipoCombustivel.current.value);
    formData.append('tipoMotor', inputTipoMotor.current.value);
    formData.append('tipoDefreio', inputTipoFreio.current.value);

    Object.values(files).forEach( (file) => {
        formData.append('image', file);
      });
      
      
      
      try {
      console.log(inputNomeCarro.current.value)
      console.log(inputPrecoCarro.current.value)
      console.log(inputTipoCombustivel.current.value)
      console.log(inputTipoMotor.current.value)
      console.log(inputTipoFreio.current.value)
      registarCarro(formData)
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
                    <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Adicionar carro</h2>
                        <ContainerLabelInputUploadImage>
                            <label className="font-bold " >Imagens do carro</label>
                            <input      type="file" accept="image/jpeg, image/png, image/gif"  name="uploadImages"  multiple   onChange={(e)=>setImage( e.target.files)}  />
                        </ContainerLabelInputUploadImage>

                       <ContainerLabelInput>
                            <label>Nome do carro</label>
                            <input  ref={inputNomeCarro} type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Preço do carro</label>
                            <input ref={inputPrecoCarro} type="text" placeholder="" required />
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
                            <label>Tipo de Motor</label>
                            <input ref={inputTipoMotor}  type="text" placeholder="" required />
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
