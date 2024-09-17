import CustomInput from '@/components/Input/CustomInput.component'
import DateInput from '@/components/Input/DateInput.component'
import DisplayRadioCheckBox from '@/components/Input/RadioCheckBoxSection/DisplayRadioCheckBox.section.component'
import { useState } from 'react'
import { doRegister } from '@/services/authService'

export default function FourthRegisterSection() {
    const [inputName, setInputName] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedGender, setSelectedGender] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            let gender
                switch(selectedGender){
                    case 'Feminino': gender = 'female'; break
                    case 'Masculino': gender = 'male'; break
                    default: gender = 'other'
                }
            const data = await doRegister(inputName, gender)
            console.log('Usuário criado', data)
            window.location.href = '/'
        } catch (error: any) {

        }
    }

    return (
        <div className='flex items-start w-full'>
            <div className='flex flex-col px-0 gap-6 w-full'>
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'rgba(57, 63, 70, 1)'}}>
                    Para começarmos a te conhecer melhor.
                </span>
                <form onSubmit={handleSubmit} className='flex flex-col px-0 gap-6 w-full'>
                    <CustomInput 
                        label='Nome' 
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder="Digite seu nome completo" 
                        required={true}
                    />
                    <DateInput
                        label='Data de nascimento'
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                        required={true}
                    />
                    <DisplayRadioCheckBox 
                        items={['Feminino', 'Masculino', 'Outro']}
                        itemFontSize={16}
                        itemGap={16}
                        circleSize={20}
                        label='Gênero'
                        itemLabelGap={10}
                        selectedValue={selectedGender}
                        onChange={setSelectedGender}
                    />
                    <div className='relative mt-4'>
                        <div 
                            className='relative flex flex-col' 
                            style={{
                                backgroundColor: 'rgba(154, 195, 187, 1)', 
                                padding: '70px 16px 16px 16px', 
                                borderRadius: '16px', 
                                gap: '10px',
                            }}
                        >
                            <div 
                                className='absolute' 
                                style={{
                                    top: '-20px', 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <img src='icons/whatsapp-logo.svg' style={{width: '80px', height: '80px'}}/>
                            </div>
                            <div style={{paddingRight: '8vh', paddingLeft: '8vh'}}>
                                <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', height:'16px', borderRadius:'20px'}}></div>
                            </div>
                            <span>
                                Para personalizarmos a sua experiência dentro do sistema, precisamos bater um papo mais íntimo. <button type="submit" style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold', background: 'none', border: 'none' }}> Clique aqui </button> para iniciar sua jornada!
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
