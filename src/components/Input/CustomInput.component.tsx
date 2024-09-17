'use client'
import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'

interface CustomInputProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'number' | 'button' | 'checkbox' | 'radio' | 'password' | 'email' | 'date' | 'url' | 'tel' | 'search' | 'file' | 'hidden' | 'submit' | 'reset' | 'image';
    placeholder?: string
    mask?: string
    icon?: string
    required?: boolean
    errorLabel?: string
    isPassword?: boolean
    isAutoComplete?: boolean
    iconClick?: () => void
}

export default function CustomInput({
    label,
    value,
    onChange,
    type='text',
    placeholder,
    mask,
    icon,
    required,
    errorLabel,
    isPassword=false,
    isAutoComplete=false,
    iconClick = () => {}
}: CustomInputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const autoComplete = isAutoComplete? 'on' : 'off'

    const compName = label.toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-z0-9\s]/g, '')
                    .trim()
                    .replace(/\s+/g, '_')

    const handlePasswordIconClick = () => {
        setShowPassword(!showPassword)
    }

    
    if(type == 'email') type = 'text'

    return (
        <div className="flex flex-col w-full" style={{gap: '4px'}}>
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
                        type={`${type}`}
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
                        id={`${compName}`}
                        name={`${compName}`}
                    />
                ) : (
                    <input
                        type={!isPassword? `${type}` : showPassword? `${type}`: 'password'}
                        value={value}
                        placeholder={placeholder}
                        className="w-full focus:outline-none text-black"
                        style={{
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '19px',
                        }}
                        required={required}
                        autoComplete={autoComplete}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        id={`${compName}`}
                        name={`${compName}`}
                    />
                )}
                {(icon || isPassword) && (
                    <button style={{width: '24px', height: '24px'}} type='button' onClick={isPassword? handlePasswordIconClick : iconClick}>
                        <img src={`${isPassword? (`/icons/password-${showPassword ? 'on' : 'off'}.svg`) : icon}`} alt='icon' />
                    </button>
                )}
            </div>
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
                {errorLabel}
            </label>
        </div>
    )
}
