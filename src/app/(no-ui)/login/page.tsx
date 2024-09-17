'use client'
import Button from '@/components/Button.component'
import Header from '@/components/Header'
import CustomInput from '@/components/Input/CustomInput.component'
import { doLogin } from '@/services/authService'
import {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setEmailError('')
        setPasswordError('')
        try {
            const res = await doLogin(email, password)
            console.log(res)
            switch(res.status) {
                case 200:
                    window.location.href = '/'
                    break
                case 404:
                    setEmailError('E-mail não encontrado.')
                    break
                case 401:
                    setPasswordError(`Senha inválida.`)
                    break
            }
            
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} className='flex flex-col' style={{paddingTop: '80px', paddingLeft: '12px', paddingRight: '12px', gap: '20px'}}> 
                <span style={{fontSize:'16px', fontWeight: '700', paddingTop: '10px', color: 'rgba(57, 63, 70, 1)'}}>Entrar</span>
                <CustomInput label='E-mail' value={email} type='email' isAutoComplete={true} required={true} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu e-mail' errorLabel={emailError}/>
                <CustomInput label='Senha' value={password} isPassword={true} required={true} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha com 8 caracteres'  errorLabel={passwordError}/>
                <div className='flex flex-col w-full pt-1' style={{gap: '16px'}}>
                    <Button type='submit' text='Entrar' style={{backgroundColor: 'rgba(197, 196, 99, 1)', color: 'rgba(58, 60, 0, 1)'}} textStyle={{fontSize: '16px', fontWeight: '500', }}/>
                    <Button text='Esqueci minha senha' type='button' onClick={() => {window.location.href = '/login/forgot-password'}} style={{color: 'rgba(239, 83, 86, 1)'}}/>
                </div>
            </form>

        </div>
    )
}