import React,{createContext, useState} from 'react';
import { CookiesProvider, useCookies} from 'react-cookie'
import api from '../core/api';




export const UserContext = createContext();

export default function UserContextApp({children}){
    const [cookies, setCookies] = useCookies();
    const [token, setToken] = useState(cookies['user'] || null);

    const [user, setUser] = useState(null);

  


    function logout(){
        setUser(null);
    }
    
    async function register(nome, email, senha){
        await api.post("/carro/register",
        {nome, email, senha},{auth:false, withCredentials:true, headers: { 'Content-Type': 'application/json',"Authorization": "Bearer " + token, "Accept": "application/json      "}})
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
            setToken(await  cookies.user.token)
            setUser(await cookies.user);
            
        
       })
       .catch(error => {
            console.log(error);
       })

    }


    return(
        <CookiesProvider >

        <UserContext.Provider value={{user, cookies, setCookies, setUser,login, logout}}>

            {children}
        </UserContext.Provider>

        </CookiesProvider>
    )

}