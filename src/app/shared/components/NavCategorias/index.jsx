
import { Container } from './styles';
import { TitleCategoria } from './TitleCategoria';
import { NavC } from './NavC';
import { NavItemC } from './NavC/NavItemC';
import { Button } from '../Button';
import { ProdutosContainer } from './ProdutosContainer';

import carros from '../../../../assets/img/casa.jpg'
import { ItemProducto } from './ItemProducto';
import styled from 'styled-components';
import dark from '../../styles/theme/dark';
import { useEffect, useState } from 'react';



const StyleDiv = styled.div`
    width: 20%;
    height: 300px;
    column-gap: 5.6rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transition: all .4s;


    @media screen and (max-width: 1200px){
        width: 40%;
        column-gap: 6rem;
    }
    @media screen and (max-width: 600px){
        width: 100%;
        column-gap: 6rem;
        justify-content: center;
       
    }
    @media screen and (max-width: 490px){
       
    }

    
`

const ArrowStyle = styled.div`
     
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(130px);
    .arrows{
        display: flex;
        align-items:center;
        justify-content: center;
        column-gap: 1rem;

        .bar{
            width: 200px;
            height: 2px;
            background-image: linear-gradient(to left, ${dark.aux}, ${dark.text});
            @media screen and (max-width: 490px){
               width: 120px;
            }
        }
        .start, .end{
            font-size: 1rem;
            color: ${dark.text}
        }
        .end{
            color: ${dark.aux};
        }
        #prev,
        #next {
          border-radius: 8px 0px 0px 0px ;
          background: transparent;
          border-style: solid;
          border-width: 2px;
          position: relative;
          width: 25px;
          height: 25px;
          transform: rotate(-45deg);
          transition: all 0.4s;
          border-color: ${dark.text} transparent transparent ${dark.text};
          cursor: pointer;
          &:hover {
            border-color: ${dark.aux} transparent transparent
              ${dark.aux};
          }
        
        }
        #prev {
            margin-right: -25px;
            transform: rotate(-45deg);
          }
          #next {
            margin-left: -25px;
            transform: rotate(135deg);
            border-color: ${dark.aux} transparent transparent
            ${dark.aux};
          }
    
    }

`
export const NavCategorias = () => {
    let index = 0;
    const [produtos, setProdutos] = useState([])
    const items = [
        {
            name: 'Fazendas',
            show: 'fazenda'
        },
        {
            name: 'Terreno',
            show: 'terreno'
        },
        {
            name: 'Venda',
            show: 'venda'
        },
        {
            name: 'Aluguer',
            show: 'aluguer'
        },

    ]

    const fill = () => {
        setProdutos([
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'terreno'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'aluguer'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'fazendas'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'venda'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'venda'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'venda'
            },
            {
                src: carros,
                alt: 'Producto de carro',
                title: 'Toyota',
                year: '2022',
                velocity: '60 mil Km',
                price: '60 milhões de kz',
                categoria: 'venda'
            },
        ])
    }

    useEffect(() => {
        fill()
    }, [])


    const show = search => {
        fill()
        const find = produtos.find(object => object.categoria.includes(search))
        if (find) {
            setProdutos([find])
        }
    }

    const plusProduts = (n) => {
        slideProduts(index += n)
    }

    const slideProduts = (n) => {

        const produtContainer = document.querySelector('#products')
        const products = Array.from(produtContainer.querySelectorAll('.prodClass'));
        if (n > products.length) {
            index = 1;
            produtContainer.style.transform = `translateX(0px)`;
        }
        if (n < 1) {
            index = products.length

        }
        if (window.matchMedia('(max-width:490px)')) {
            produtContainer.style.transform = `translateX(-${(index - 1) * products[index - 1].offsetWidth + (index - 1) * 98}px)`;
        } else {

            produtContainer.style.transform = `translateX(-${(index - 1) * products[index - 1].offsetWidth + (index - 1) * 88.6}px)`;
        }

    }


    return (
        <>
            <Container>
                <TitleCategoria>
                    Confira nossos Produtos
                </TitleCategoria>
                <NavC>
                    {
                        items.map((item, index) => (<NavItemC key={index} text={item.name} onClick={() => show(item.show)} />))
                    }
                    <Button theme="primary" onClick={fill} >Ver tudo</Button>
                </NavC>
            </Container>
            <Container>
                <ProdutosContainer>
                    <StyleDiv id="products">
                        {
                            produtos.map((produto, index) => (<ItemProducto key={index} src={produto.src} alt={produto.alt} price={produto.price} title={produto.title} velocity={produto.velocity} year={produto.year} prodClass='prodClass' />))
                        }

                    </StyleDiv>
                    <ArrowStyle>
                        <div className='arrows'>
                            <a onClick={() => plusProduts(-1)} id='prev'></a>
                            <span className='start'>{produtos.length - produtos.length + 1}</span>
                            <div className='bar'></div>
                            <span className='end'>{produtos.length}</span>
                            <a onClick={() => plusProduts(1)} id='next'></a>
                        </div>
                    </ArrowStyle>
                </ProdutosContainer>
            </Container>


        </>
    )
}

