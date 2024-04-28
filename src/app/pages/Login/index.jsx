
'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, Icon, Input, Label } from 'keep-react'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


const {login}=useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email,senha)
    setTimeout(()=>{
      setEmail('')
      setSenha('')
      alert('Login realizado com sucesso')
      window.location.href = '/admin/76'
    },2000)
   
}



  return (
    <form  onSubmit={handleSubmit} className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <div className="relative">
          <Input  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input id="password"   value={senha} onChange={(e)=>setSenha(e.target.value)} autoComplete='curren-password' placeholder="************" type="password" className="ps-11" />
          <Icon>
            <Lock size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <Button size="sm" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}
