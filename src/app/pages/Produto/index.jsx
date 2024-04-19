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

const teste={
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
}

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