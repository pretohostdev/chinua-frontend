import React,{createContext, useState} from 'react';
import { CookiesProvider, useCookies} from 'react-cookie'
import api from '../core/api';
import { Bounce, ToastContainer, toast } from 'react-toastify';






export const UserContext = createContext();

export default function UserContextApp({children}){
    const [cookies, setCookies,removeCookie] = useCookies();
    const [token, setToken] = useState(cookies['user'] || null);
    const [listaDeCarro, setListaDeCarro] = useState([])
    const [fazendas, setFazendas] = useState([])
    const [imoveis, setImoveis] = useState([])
    const [maquinarias, setMaquinarias] = useState([])
    const [equipamentos,setEquipamentos]=useState([])
    

    const [user, setUser] = useState({});

  
    function verificarUsuarioLogado(){
        const token=cookies["user"].usuarioLogado
        if (!token) {
         window.location.href="/login"
        };
    }
    

    
    async function buscarTodosEquipamentos(){

        await api.get("/equipamento/listar")
        .then(async (response) => {
            const equipamentos = await response.data;
            setEquipamentos(equipamentos);
        })
    }
    
    async function buscarTodosCarros() {
        await api.get("/carro/listar")
            .then(async (response) => {
                const carros = await response.data;
                setListaDeCarro(carros);
            })
    }
    async function buscarTodasAsFazendas(){
        await api.get("/terra/listar")
            .then(async (response) => {
                const fazendas = await response.data;
                setFazendas(fazendas);
            })
    }

    async function buscarTodosImoveis(){
        await api.get("/imovel/listar")
            .then(async (response) => {
                const imoveis = await response.data;
                setImoveis(imoveis);
            })
    }
    async function buscarTodasMaquinarias(){
        await api.get("/maquinaria/listar")
            .then(async (response) => {
                const maquinarias = await response.data;
                setMaquinarias(maquinarias);
            })
            .catch((error)=>{
   
            console.log("erro ao listar as maquinarias",error)
               
            })
    }

    function logout(){
        removeCookie("user",{path:"/"})

        setTimeout(()=>{
            window.location.reload();
        },2000)
    }
    
    async function registarCarro(formData){
        await api.post("/carro/registar",formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            "authorization": "Bearer" + token
        })
        .then(response => {
            console.log(response.data);
            toast.success('Carro adicionado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                
        })
        .catch(error => {
            console.log(error);
        })
    }

    async function registarMaquinaria(formData){
        await api.post("/maquinaria/registar",formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            "authorization": "Bearer" + token
        })
        .then(response => {
            console.log(response.data);
            toast.success('Maquinaria adicionado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch(error => {
            toast.error('Erro ao adicionar !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:1,
                theme: "light",
                transition: Bounce,
                });
            console.log(error);
        })
    }

    async function registarFazenda(formData){
        await api.post("/terra/registar",formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(response => {
            console.log(response.data);
            toast.success('Fazenda ou Terreno adicionado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch(error => {
            toast.error('Erro ao adicionar !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:1,
                theme: "light",
                transition: Bounce,
                });
        })
    }


    async function registarImovel(formData){
        await api.post("/imovel/criar",formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(response => {
            toast.success('Imovel adicionado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch(error => {
            toast.error('Erro ao adicionar !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:1,
                theme: "light",
                transition: Bounce,
                });
        })
    }

    
    async function login(email, senha){
        await api.post("/session/login",{email, senha})
        .then(async (response) => {
            setCookies('user', response.data, { path: '/' })
            setToken(  cookies["user"].token)
            setUser(cookies["user"].usuarioLogado);
        
       })
       .catch(error => {
        toast.error('Erro ao fazer login !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress:1,
            theme: "light",
            transition: Bounce,
            });
       })

    }


    return(
        <CookiesProvider >

        <UserContext.Provider value={{user,
             cookies, setCookies,
              setUser,login, logout,
              registarCarro,
              buscarTodosCarros,
              listaDeCarro,
              buscarTodasAsFazendas,
              fazendas,
              registarFazenda,
              verificarUsuarioLogado,
              buscarTodosImoveis,imoveis,
              registarImovel,
              registarMaquinaria,
              maquinarias,
              buscarTodasMaquinarias,
              buscarTodosEquipamentos,
              equipamentos
              }}>

            {children}
        </UserContext.Provider>

        </CookiesProvider>
    )

}