import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'

interface CustomInputProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    mask?: string
    icon?: string
    iconClick?: () => void
    required?: boolean
}

export default function CustomInput({
    label,
    value,
    onChange,
    placeholder,
    mask,
    icon,
    required,
    iconClick = () => {}
}: CustomInputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className="flex flex-col w-full">
            <label
                className="mb-1"
                style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    fontWeight: 400,
                    color: 'rgba(57, 63, 70, 1)',
                    marginBottom: '4px',
                    paddingLeft: '12px',
                }}
            >
                {label}
            </label>
            <div className={`flex w-full rounded-lg shadow-input`}
                style={{
                    padding: '15px 12px',
                    border: `1px solid ${isFocused ? 'rgba(239, 83, 86, 1)' : 'rgba(213, 219, 225, 1)'}`,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            >
                {mask ? (
                    <ReactInputMask 
                        mask={mask}
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full focus:outline-none text-black"
                        style={{
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '19px',
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                    />
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full focus:outline-none text-black"
                        style={{
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '19px',
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                    />
                )}
                {icon && (
                    <button style={{width: '24px', height: '24px'}} onClick={iconClick}>
                        <img src='icons/calendar.svg' alt='icon' />
                    </button>
                )}
            </div>
        </div>
    )
}
