
import styled from 'styled-components';
import { Nav } from '../Nav';
import { Logo } from './../Logo';
import { Container } from './styles';
import dark from '../../styles/theme/dark';
import { useState } from 'react';

const Humburger = styled.div`
@media screen and (max-width: 1200px){
    display: flex;
    position: relative;
    z-index: 110;
    }
 
       border-radius: 1px;
       display: none;
       align-items:center;
       justify-content: center;
       flex-flow: column;
       cursor: pointer;

       div{
            border-radius: 5px;
            width: 2.5rem;
            height: 0.1rem;
            margin:0.4rem; 
            background: ${dark.text};
            transition: all .4s;
        }
       &:hover{
            div{
                background:  ${dark.text};
            }
       } `;

export const NavBar = ({urlLogo}) => {

    const [nav, setNav] =  useState('') 
    const [toggle, setToggle] =  useState('') 
    // nav__bar__active

    const navToggle =  ()=>{
        nav === '' ? setNav('nav__bar__active'): setNav('');
        toggle === '' ? setToggle('toggle'): setToggle('');
    }
     return (
        <Container>
            <div className="container">
                <Logo urlLogo={urlLogo} />
                <Nav propClass={nav} />
                <Humburger onClick={navToggle} className={toggle}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                </Humburger>
            </div>
        </Container>
    )
}

