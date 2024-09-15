import CustomInput from '@/components/Input/CustomInput.component'
import DateInput from '@/components/Input/DateInput.component'
import RadioCheckbox from '@/components/Input/RadioCheckBox.component'
import { useState } from 'react'

export default function FourthRegisterSection() {
    const [inputValue, setInputValue] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    return (
        <div className='flex justify-left items-start px-2'>
            <div className='flex flex-col justify-left items-start px-0 gap-6'>
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'rgba(57, 63, 70, 1)'}}>Para começarmos a te conhecer melhor.</span>
                <CustomInput 
                    label='Nome' value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite seu nome completo" 
                    required={true}
                    />
                <DateInput
                    label='Data de nascimento'
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    required={true}
                />
                <RadioCheckbox checked={true} label='Teste' onChange={() => {}}/>
            </div>
        </div>
    )
}