import React,{createContext, useState} from 'react';
import { CookiesProvider, useCookies} from 'react-cookie'
import api from '../core/api';




export const UserContext = createContext();

export default function UserContextApp({children}){
    const [cookies, setCookies,removeCookie] = useCookies();
    const [token, setToken] = useState(cookies['user'] || null);
    const [listaDeCarro, setListaDeCarro] = useState([])
    const [fazendas, setFazendas] = useState([])

    const [user, setUser] = useState({});

  
    function verificarUsuarioLogado(){
        const token=cookies["user"].usuarioLogado
        if (!token) {
         window.location.href="/login"
        };
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
        })
        .catch(error => {
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
        })
        .catch(error => {
            console.log(error);
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
            console.log(error);
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
              verificarUsuarioLogado
              }}>

            {children}
        </UserContext.Provider>

        </CookiesProvider>
    )

}