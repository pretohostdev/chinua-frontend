import { useState } from "react";

import {
    ContainerMain,
    ContainerAside,
    ContainerHeader

} from "./admin.js";
import { FormCarro } from "./components/FormCarro.jsx";
import { FormFazendaTerreno } from "./components/FormFazendaTerreno.jsx";
import { FormImovel } from "./components/FormImovel.jsx";


export default function Admin() {

    const [form, setForm]=useState(1);




    return (
        <>
            <ContainerHeader>
                <p>C-Panel - Administrador</p>
            </ContainerHeader>

            <ContainerMain>
        <ContainerAside   >
                <p className="font-bold text-black text-xl">Administrador</p>
                <p  className="font-thin text-black " >Francisco Pedro</p>
                <p>01/01/2023</p>
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