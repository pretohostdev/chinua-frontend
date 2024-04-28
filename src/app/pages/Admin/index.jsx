import { useContext, useEffect, useState,useHistory ,useCallback} from "react";
import { CookiesProvider, useCookies ,Cookies,withCookies} from 'react-cookie'
import {
    ContainerMain,
    ContainerAside,
    ContainerHeader

} from "./admin.js";
import { FormCarro } from "./components/FormCarro.jsx";
import { FormFazendaTerreno } from "./components/FormFazendaTerreno.jsx";
import { FormImovel } from "./components/FormImovel.jsx";
import { UserContext } from "../../context/UserContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

export default function Admin() {
    const [form, setForm]=useState(1);
    const {cookies}=useContext(UserContext);
   
  

    
    useEffect(  ()=>{
        
   
    
            if(!cookies){
              window.location.href="/login";
              return;
            }
    

    },[cookies])





    return (
        <>
            <ContainerHeader>
                <p>C-Panel - Administrador</p>
            </ContainerHeader>

            <ContainerMain>
        <ContainerAside   >
                <p className="font-bold text-black text-xl">Administrador</p>
                <p  className="font-thin text-black " >{cookies?.user.usuarioLogado.primeiroNome + " " + cookies?.user.usuarioLogado.segundoNome}</p>
                <p  className="font-thin text-black " >{cookies?.user.usuarioLogado.email}</p>
 
                <p>Data: {new Date().toLocaleDateString("pt-AO")}</p>
                <p>Hora: {new Date().toLocaleTimeString("pt-AO")}</p>
                <hr className="border-2 border-black mb-2"/>
                <div className=" flex flex-column justify-start ">
                    <p className="font-bold">Menu</p>
                    <hr className="border-2 border-black mb-2"/>

                    <button className="bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg mb-2"  onClick={()=>setForm(1)}>Carro</button>
                    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={()=>setForm(2)}>Fazenda - Terreno</button>
                    <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={()=>setForm(3)}>Imovel</button>
                </div>
        </ContainerAside>
             {
                form === 1 && (<FormCarro/>)
             }
             {
                form === 2 && (<FormFazendaTerreno/>)
             }
             {
                form === 3 && (<FormImovel/>)
             }
                
            </ContainerMain>
        </>
    )
} 