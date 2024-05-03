
'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, Icon, Input, Label } from 'keep-react'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'
import{ContainerLoginPage } from "./style.js"
export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


const {login}=useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email,senha)

   
}



  return (

    <ContainerLoginPage>

    <form  onSubmit={handleSubmit} className="w-96   mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
      <fieldset className="space-y-1">
        <Label >Email</Label>
        <div className="relative">
          <Input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" className="ps-11" />
          
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label >Senha</Label>
        <div className="relative">
          <Input   id="password"   value={senha} onChange={(e)=>setSenha(e.target.value)} autoComplete='curren-password' placeholder="************" type="password" className="ps-11" />
          
        </div>
      </fieldset>

     <div className='flex justify-center'>
     <Button size="sm" color="primary" type="submit">
        Entrar
      </Button>
     </div>
    </form>
    </ContainerLoginPage>
  )
}
