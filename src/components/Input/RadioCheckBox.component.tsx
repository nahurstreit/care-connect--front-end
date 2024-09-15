import React from 'react'

interface RadioCheckboxProps {
    label: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RadioCheckbox({ label, checked, onChange }: RadioCheckboxProps) {
    return (
        <label className="flex items-center gap-2 relative">
            <div className="relative flex items-center justify-center">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full focus:outline-none"
                    style={{
                        borderRadius: '50%',
                        position: 'relative',
                    }}
                />
                {checked && (
                    <div
                        className="absolute top-0 left-0 flex items-center justify-center"
                        style={{
                            borderRadius: '50%',
                            boxSizing: 'border-box',
                            width: '24px',//external circle
                            height: '24px',
                            pointerEvents: 'none',
                        }}
                    >
                        <div
                            className="bg-black rounded-full"
                            style={{ 
                                width: '10px',//smaller circle
                                height: '10px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                )}
            </div>
            <span
                style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '19px',
                    color: 'rgba(57, 63, 70, 1)',
                    textAlign: 'left',
                }}
            >
                {label}
            </span>
        </label>
    )
}
