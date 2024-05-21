import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
    ContainerMain,
    ContainerAside,
    ContainerHeader,
    ContaienerMain,
    ContainerContentsFlex,
    ContainerFormUpdate,
    ContainerFormUpdateHeader,
    ContainerFormUpdateContent,
    ContainerBuscarProduto,
    ContainerButtonSelecinar,
    ContainerFormLeft


} from "./admin.js";
import { FormCarro } from "./components/FormCarro.jsx";
import { FormFazendaTerreno } from "./components/FormFazendaTerreno.jsx";
import { FormImovel } from "./components/FormImovel.jsx";

import { UserContext } from "../../context/UserContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { FormAtualizarCarro  } from "./FormsAtualizar/Carro.jsx";
import { FormAtualizarFazenda } from "./FormsAtualizar/Fazenda.jsx";
import { FormAtualizarImovel } from "./FormsAtualizar/Imovel.jsx";
import {FormAtualizarMaquinaria} from "./FormsAtualizar/Maquinaria.jsx"
import { FormMaquinaria } from "./components/FormMaquinaria.jsx";

export default function Admin() {

    const [idProduto,setIdProduto]=useState("")
    const [form, setForm] = useState(1);
    const { cookies,verificarUsuarioLogado,logout } = useContext(UserContext);
    
    const navigate = useNavigate()
    const [formUpdate,setFormUpdate]=useState(1);



    const cookieValue=cookies["user"]



    useEffect(() => {

        if(!cookieValue.token){
            verificarUsuarioLogado()
        
        }

    }, [cookies["user"]])


    function buscarProdutoPeloID(){
            
        return idProduto
    }



    return (
        <>
            <ContainerHeader>
                <p>C-Panel - Administrador</p>
            </ContainerHeader>

            <ContainerMain>
                <ContainerAside   >
                    <p className="font-bold text-black text-xl">Administrador</p>
                    <p className="font-thin text-black " >{cookies?.user.usuarioLogado.primeiroNome + " " + cookies?.user.usuarioLogado.segundoNome}</p>
                    <p className="font-thin text-black " >{cookies?.user.usuarioLogado.email}</p>

                    <p>Data: {new Date().toLocaleDateString("pt-AO")}</p>
                    <p>Hora: {new Date().toLocaleTimeString("pt-AO")}</p>
                    <hr className="border-2 border-black mb-2" />
                    <div className=" flex flex-column justify-start ">
                        <p className="font-bold">Menu</p>
                        <hr className="border-2 border-black mb-2" />

                        <button className="bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={() => setForm(1)}>Automoveis</button>
                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={() => setForm(2)}>Fazenda - Terreno</button>
                        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={() => setForm(3)}>Imovel</button>
                        <button className="bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={() => setForm(4)}>Maquinarias</button>


                        <div  className="flex justify-center  mt-4" >
                        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-2" onClick={() => logout()}>Terminar Sessão</button>
                    </div>
                    </div>
                </ContainerAside>
                <ContaienerMain>
                    <ContainerContentsFlex>
                        {
                            form === 1 && (<FormCarro />)
                        }
                        {
                            form === 2 && (<FormFazendaTerreno />)
                        }
                        {
                            form === 3 && (<FormImovel />)
                        }
                        {
                            form=== 4 &&(<FormMaquinaria/>)
                        }

                        <ContainerFormUpdate>
                            <ContainerFormUpdateHeader>
                                <p>Atualizar produtos</p>
                            </ContainerFormUpdateHeader>

                            <ContainerFormUpdateContent>
                                    <ContainerFormLeft>
                                        <ContainerButtonSelecinar>
                                            <button className="btn   text-cyan-50  font-normal px-4 mx-1 rounded "   style={{background:"#262626"}}   onClick={()=>setFormUpdate(1) }     > Automoveis</button>
                                            <button className="btn   text-cyan-50  font-normal px-4 mx-1 rounded "   style={{background:"#262626"}}  onClick={()=>setFormUpdate(2) }   >Fazenda</button>
                                            <button className="btn   text-cyan-50  font-normal px-4 mx-1 rounded "   style={{background:"#262626"}}   onClick={()=>setFormUpdate(3) }   >Imovel</button>
                                            <button className="btn   text-cyan-50  font-normal px-4 mx-1 rounded "   style={{background:"#262626"}}   onClick={()=>setFormUpdate(4) }   >Maquinaria</button>
                                        </ContainerButtonSelecinar>
                                        <ContainerBuscarProduto>
                                            <input  className="input-search"   value={idProduto} onChange={(e)=>setIdProduto(e.target.value)} type="text"   placeholder="REF DO PRODUTO" />
                                            
                                        </ContainerBuscarProduto>
                                    </ContainerFormLeft>
                               {
                                formUpdate === 1 && (<FormAtualizarCarro   idProduto={idProduto}  />)
                               }
                               {
                                formUpdate === 2 &&(<FormAtualizarFazenda idProduto={idProduto} />)
                               }
                                {
                                formUpdate === 3 &&(<FormAtualizarImovel idProduto={idProduto} />)
                               }
                                {
                                formUpdate === 4 &&(<FormAtualizarMaquinaria idProduto={idProduto} />)
                               }
                            </ContainerFormUpdateContent>

                        </ContainerFormUpdate>

                    </ContainerContentsFlex>
                </ContaienerMain>

            </ContainerMain>
            
        </>
    )
} 