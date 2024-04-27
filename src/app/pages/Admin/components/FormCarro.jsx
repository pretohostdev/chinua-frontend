import React, { useState } from "react"

import {ContainerLabelInput,
  ContainerLabelInputUploadImage, Form

} from "../admin"





export const FormCarro = () => {
  const [files, setFiles] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(files)
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
                            <input      type="file" accept="image/jpeg, image/png, image/gif"  multiple   onChange={(e)=>{setImage( e.target.files)}}  />
                        </ContainerLabelInputUploadImage>

                        <ContainerLabelInput>
                            <label>Nome do carro</label>
                            <input type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Preço do carro</label>
                            <input type="text" placeholder="" required />
                        </ContainerLabelInput>
                  
                       
                        <ContainerLabelInput>
                            <label>Tipo de combustível</label>
                           <select id="fuel"  required>
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
                            <input type="text" placeholder="" required />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Tipo de Freio</label>
                            <input type="text" placeholder= "" required  />
                        </ContainerLabelInput>
                       
                       
                    <button type="submit" className="btn btn-primary" >Adicionar carro</button>
                    </Form>
    </>
  )
}
