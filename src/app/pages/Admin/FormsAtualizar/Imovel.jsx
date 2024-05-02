import React, {useEffect, useRef } from "react"

import {ContainerLabelInput,Form} from "../admin"

import api from "../../../core/api"


export const FormAtualizarImovel = ({idProduto}) => {
    const inputArea=useRef(null)
    const inputPreco=useRef("")
    const inputLocalizacao=useRef("")
    const inputTipo=useRef("")
    const inputImovel=useRef("")
    const inputDescricao=useRef("")
    const inputStatus=useRef("");
     
   
    async function buscarProduto(ID){
        const produto= await api.get(`/imovel/listar/${ID}`)
        console.log(produto.data);
        inputArea.current.value=produto.data.area;
        inputDescricao.current.value=produto.data.descricao;
        inputLocalizacao.current.value=produto.data.localizacao;
        inputTipo.current.value=produto.data.tipo;
        inputImovel.current.value=produto.data.nomeDoImovel;
        inputStatus.current.value=produto.data.status;
        inputPreco.current.value=produto.data.preco

    }

    useEffect(()=>{
        buscarProduto(idProduto)
    },[idProduto])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data={
                nomeDoImovel:inputImovel.current.value,
                area:inputArea.current.value,
                descricao:inputPreco.current.value,
                tipo:inputTipo.current.value,
                localizacao:inputLocalizacao.current.value,
                status:inputStatus.current.value,
                descricao:inputDescricao.current.value


            }
          await api.put(`/imovel/atualizar/${idProduto}`,data)
          .then((response)=>{
                console.log(response.data);
                alert(`${inputImovel.current.value} atualizado com sucesso!`);
               
          })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl text-center mb-4 mt-4"  >Atualizar Imovel</h2>
            <ContainerLabelInput>
                <label>Nome do imovel</label>
                <input ref={inputImovel}  type="text" placeholder="" required={[true,"Nome do imovel é necessário"]} />
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
            <ContainerLabelInput>
                <label>Estado</label>
               <select   ref={inputStatus}  id="fuel"  required>
                    <option value="Disponivel">Disponivel</option>
                    <option value="Vendido" >Vendido</option>
                    <option value="Alugado" >Alugado</option>
                </select>
            </ContainerLabelInput>

                <button type="submit" className="btn  bg-gray-700" >Atualizar {inputTipo.current.value?inputTipo.current.value:"Imovel"} </button>
            </Form>
        </>
    )
}
