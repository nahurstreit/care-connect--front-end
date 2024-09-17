'use client'
import Button from '@/components/Button.component'
import Header from '@/components/Header'
import CustomInput from '@/components/Input/CustomInput.component'
import { sendResetEmail } from '@/services/authService'
import { set } from 'date-fns'
import { useState } from 'react'

export default function ForgotPassword() {
    const [showVerifyCode, setShowVerifyCode] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [sentEmail, setSentEmail] = useState('')

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setEmailError(``)
        try {
            const res = await sendResetEmail(email)
            switch(res.status) {
                case 200:
                    setSentEmail(email)
                    setShowVerifyCode(true)
                break
                case 404:
                    setEmailError(`E-mail não encontrado`)
                    break
            }
            
        } catch(error) {}
        
    }

    return (
        <div>
            <Header />
            <div className='flex flex-col' style={{ paddingTop: '80px', paddingLeft: '12px', paddingRight: '12px', gap: '20px'}}>
                <span style={{ fontSize: '16px', fontWeight: '700', paddingTop: '10px', color: 'rgba(57, 63, 70, 1)'}}>Redefinir senha</span>
                {showVerifyCode && (
                    <>
                        <div className='flex flex-col items-center h-full' style={{ 
                            gap: '8px', 
                            borderRadius: '16px',
                            borderWidth: '1px',
                            borderColor: 'rgba(176, 193, 217, 1)', 
                            backgroundColor: 'rgba(242, 240, 240, 1)', 
                            padding: '16px 8px',
                            borderStyle: 'solid',
                        }}>
                            <img src='/icons/email-sent.svg' alt='email' style={{maxWidth: '55px', paddingBottom: '8px', paddingTop:'8px'}}/>
                            <span style={{ textAlign: 'center' }}>Enviamos uma solicitação de autorização para redefinir sua senha no seu e-mail:<br></br><b style={{ color: 'rgba(239, 83, 86, 1)' }}>{sentEmail}</b></span>
                        </div>
                    </>

                )}
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection:'column', gap: '20px' }}>
                    <CustomInput 
                        label='E-mail' 
                        value={email}
                        type='email'
                        isAutoComplete={true} 
                        required={true} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='Digite seu e-mail' 
                        errorLabel={emailError} 
                    />
                    <div className='flex flex-col w-full pt-1' style={{ gap: '16px' }}>
                        <Button 
                            type='submit' 
                            text={!showVerifyCode? 'Enviar e-mail' : 'Reenviar o e-mail'}
                            style={{ backgroundColor: 'rgba(197, 196, 99, 1)', color: 'rgba(58, 60, 0, 1)' }} 
                            textStyle={{ fontSize: '16px', fontWeight: '500' }} 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

interface SendPasswordResetProps {
    email: string
    setEmail: (e: string) => void
    onSubmit: () => void
    emailError: string
    setEmailError: (error: string) => void
}

function VerifyPasswordReset({ email }: { email: string }) {
    return (
        <div>

        </div>
    )
}
