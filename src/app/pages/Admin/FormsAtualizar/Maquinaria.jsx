import React, { useContext, useEffect, useRef, useState } from "react"

import {ContainerLabelInput, Form

} from "../admin"
import { UserContext } from "../../../context/UserContext"
import api from "../../../core/api"





export const FormAtualizarMaquinaria = ({idProduto}) => {
const inputPrecoMaquina=useRef("")
const inputTipoCombustivel=useRef("")
const inputTipoMotor=useRef("")
const inputTipoFreio=useRef("")
const inputTipoDeMaquinaria=useRef("")
const inputEstadoDeConversao=useRef("")
const inputNomeDaMaquinaria=useRef("")
const inputStatus=useRef("")



async function buscarProduto(ID){
    const produto= await api.get(`/maquinaria/listar/${ID}`)
    console.log(produto.data);
   inputEstadoDeConversao.current.value=produto.data.estadoDeConversao;
   inputNomeDaMaquinaria.current.value=produto.data.nomeDaMaquinaria;
   inputPrecoMaquina.current.value=produto.data.price;
   inputTipoCombustivel.current.value=produto.data.tipoCombustivel;
   inputTipoMotor.current.value=produto.data.tipoMotor;
   inputTipoFreio.current.value=produto.data.tipoDefreio;
   inputTipoDeMaquinaria.current.value=produto.data.tipoDeMaquinaria;
   inputStatus.current.value=produto.data.status;

}

useEffect(()=>{
    buscarProduto(idProduto)
},[idProduto])

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const data={
            nomeDaMaquinaria:inputNomeDaMaquinaria.current.value,
            price:inputPrecoMaquina.current.value,
            tipoCombustivel:inputTipoCombustivel.current.value,
            estadoDeConversao:inputEstadoDeConversao.current.value,
            tipoMotor:inputTipoMotor.current.value,
            tipoDefreio:inputTipoFreio.current.value,
            tipoDeMaquinaria:inputTipoDeMaquinaria.current.value,
            status:inputStatus.current.value,
        }
      await api.put(`/maquinaria/atualizar/${idProduto}`,data)
      .then((response)=>{
            console.log(response.data);
            alert(`${response.data.nomeDaMaquinaria} atualizado com sucesso!`);
           
      })
    } catch (error) {
        alert(error.response.data.message)
    }
}



  return (
    <>
      <Form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Atualizar Maquinarias</h2>
                       <ContainerLabelInput>
                            <label>Nome da maquinaria</label>
                            <input  ref={inputNomeDaMaquinaria} type="text" placeholder="" required={[true,"Nome do carro é necessário"]} />
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Preço da maquinaria</label>
                            <input ref={inputPrecoMaquina} type="number" placeholder="" required />
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
                       <ContainerLabelInput>
                    <label>Estado</label>
                    <select ref={inputStatus} id="status" required  >
                        <option value="Vendido">Vendido</option>
                        <option value="Disponivel">Disponivel</option>
                        <option value="Alugado">Alugado</option>
                  
                    </select>
                </ContainerLabelInput>
                       
                       
                    <button type="submit" className="btn btn-primary" >Atualizar Maquinaria</button>
      </Form>
    </>
  )
}
