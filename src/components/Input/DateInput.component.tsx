import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomInput from './CustomInput.component'

interface DateInputProps {
    label: string
    selectedDate: Date | null
    required: boolean
    onDateChange: (date: Date | null) => void
}

export default function DateInput({ label, selectedDate, required, onDateChange }: DateInputProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDateChange = (date: Date | null) => {
        onDateChange(date);
        setIsOpen(false);
    }

    return (
        <div className="flex flex-col w-full relative">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText='00/00/00000'
                customInput={
                    <CustomInput 
                        value={selectedDate ? selectedDate.toLocaleDateString('pt-BR') : ''} 
                        onChange={() => {}} 
                        label={label} 
                        icon='icons/calendar.svg' 
                        iconClick={() => setIsOpen(true)} 
                        mask='99/99/9999'
                        required={required}
                    />}
                dateFormat="dd/MM/yyyy"
                open={isOpen}
                onClickOutside={() => setIsOpen(false)}
            />
        </div>
    )
}
