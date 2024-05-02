import React, {useEffect, useRef } from "react"

import {ContainerLabelInput,Form} from "../admin"

import api from "../../../core/api"


export const FormAtualizarFazenda = ({idProduto}) => {
    const inputDimensao=useRef("")
    const inputPreco=useRef("")
    const inputLocalizacao=useRef("")
    const inputTipo=useRef("")
    const inputStatus=useRef("")
     
   
    async function buscarProduto(ID){
        const produto= await api.get(`/terra/listar/${ID}`)
        console.log(produto.data);
        inputDimensao.current.value=produto.data.dimensao;
        inputPreco.current.value=produto.data.price;
        inputStatus.current.value=produto.data.status;
        inputLocalizacao.current.value=produto.data.localizacao;
        inputTipo.current.value=produto.data.tipo

    }

    useEffect(()=>{
        buscarProduto(idProduto)
    },[idProduto])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data={
                dimensao:inputDimensao.current.value,
                price:inputPreco.current.value,
                tipo:inputTipo.current.value,
                localizacao:inputLocalizacao.current.value,
                status:inputStatus.current.value
            }
          await api.put(`/terra/atualizar/${idProduto}`,data)
          .then((response)=>{
                console.log(response.data);
                alert(`${inputTipo.current.value} atualizado com sucesso!`);
                window.location.href="/login"
          })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Atualizar Fazenda || Terreno</h2>
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

            <ContainerLabelInput>
                <label>Estado</label>
               <select ref={inputStatus} id="fuel"  required>
                    <option value="Disponivel">Disponivel</option>
                    <option value="Vendido">Vendido</option>
                    <option value="Alugado">Algudo</option>
                </select>
            </ContainerLabelInput>

                <button type="submit" className="btn  bg-gray-700" >Atualizar {inputTipo.current.value?inputTipo.current.value:"Terra"} </button>
            </Form>
        </>
    )
}
