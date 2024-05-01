import React, { useContext, useEffect, useRef, useState } from "react"

import {
    ContainerLabelInput,
    ContainerLabelInputUploadImage, Form

} from "../admin"
import { UserContext } from "../../../context/UserContext"
import api from "../../../core/api"




export const FormAtualizarCarro = ({idProduto}) => {
    const inputNomeCarro = useRef("")
    const inputPrecoCarro = useRef("")
    const inputTipoCombustivel = useRef("")
    const inputTipoMotor = useRef("")
    const inputTipoFreio = useRef("")
    const inputStatus = useRef("")
 
    
    
    async function buscarProduto(ID){
        const produto= await api.get(`/carro/listar/${ID}`)
        console.log(produto.data);
        inputNomeCarro.current.value=produto.data.nomeDoCarro;
        inputPrecoCarro.current.value=produto.data.price;
        inputStatus.current.value=produto.data.status;
        inputTipoMotor.current.value=produto.data.tipoMotor;
        inputTipoCombustivel.current.value=produto.data.tipoCombustivel;
    }

    useEffect(()=>{
        buscarProduto(idProduto)
    },[idProduto])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data={
                nomeDoCarro:inputNomeCarro.current.value,
                price:inputPrecoCarro.current.value,
                tipoCombustivel:inputTipoCombustivel.current.value,
                tipoMotor:inputTipoMotor.current.value,
                tipoDefreio:inputTipoFreio.current.value,
                status:inputStatus.current.value
            }
           
          await api.put(`/carro/atulizar/status/${idProduto}`,data)
          .then((response)=>{
                console.log(response.data);
                alert("Carro Atualizado com sucesso!");
          })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ContainerLabelInput>
                    <label>Nome do carro</label>
                    <input ref={inputNomeCarro} type="text" placeholder="" required={[true, "Nome do carro é necessário"]} />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <label>Preço do carro</label>
                    <input ref={inputPrecoCarro} type="text" placeholder="" required />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <label>Tipo de combustível</label>
                    <select ref={inputTipoCombustivel} id="fuel" required>
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
                    <input ref={inputTipoMotor} type="text" placeholder="" required />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <label>Tipo de Freio</label>
                    <select ref={inputTipoFreio} id="freio" required  >
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


                <button type="submit" className="btn  bg-gray-700" >Atualizar carro</button>
            </Form>
        </>
    )
}
