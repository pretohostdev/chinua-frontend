import { useParams } from "react-router-dom";
import {ProductDescription,ProductDetailsContainer,
  ProductPrice,ProductImage,ProductName, Container,
  ButtonPedido} from "./style"
import { useEffect } from "react";
import { useState } from "react";

const products = {
  "1": { name:"Produto 1" ,image:"/images/produto1.jpg",descricao:"EH UM PRODUTO IDEIAL PARA VOCE" },
  "2": { name:"Produto 2" ,image:"/images/produto2.jpg" ,descricao:"EH UM PRODUTO IDEIAL PARA VOCE" },
  "3": { name:"Produto 3" ,image:"/images/produto3.jpg", descricao:"EH UM PRODUTO IDEIAL PARA VOCE" },
  "4": { name:"Produto 4" ,image:"/images/produto4.jpg",descricao:"EH UM PRODUTO IDEIAL PARA VOCE"  },
}

export default function ProductDetails() {
  const [Produto,setProduto]=useState({})

  const {IDproduto}=useParams()

  const produto = products[IDproduto];
  const buscarProdutos = async()=>{
     await fetch(`https://fakestoreapi.com/products/${IDproduto}`)
     .then( async(response)=>{

      const data= await response.json()
      setProduto(data)
     })
     .catch((error)=>{
      console.log({message:"Error ao listar o produto",messageError:error})
     }) 
  }

  useEffect(()=>{
    buscarProdutos()
  },[])

  return (
    <>
    
    <Container>
    <ProductDetailsContainer>
      <ProductImage src={Produto.image} alt={Produto.title} />
      <ProductName>{Produto.title}</ProductName>
      <ProductPrice>{Produto.price} <span>AOA</span></ProductPrice>
      <ProductDescription>{Produto.description}</ProductDescription>
        <ButtonPedido>Fazer Pedido</ButtonPedido>
    </ProductDetailsContainer>
    </Container>
    </>
  );
}