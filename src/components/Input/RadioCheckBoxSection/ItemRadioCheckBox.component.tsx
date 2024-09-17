import React from 'react'

interface ItemRadioCheckboxProps {
    label: string
    labelGap?: number
    fontSize?: number
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    circleSize?: number
    externalBorderColor?: string
    innerCircleColor?: string
}

export default function ItemRadioCheckbox({ label, labelGap=8 ,fontSize=16, checked, onChange, circleSize = 24, externalBorderColor='rgba(57, 63, 70, 1)', innerCircleColor='rgba(57, 63, 70, 1)' }: ItemRadioCheckboxProps) {
    const innerCircleSize = circleSize * 0.4

    return (
        <label className="flex items-center relative" style={{gap: `${labelGap}px`}}>
            <div className="relative flex items-center justify-center">
                
                <input //external circle
                    type="radio" 
                    checked={checked}
                    onChange={onChange}
                    className="appearance-none border rounded-full focus:outline-none"
                    style={{
                        width: `${circleSize}px`, 
                        height: `${circleSize}px`,
                        borderColor: `${externalBorderColor}`,
                        borderRadius: '50%',
                        borderWidth: '2px', 
                        position: 'relative',
                    }}
                />
                {checked && (
                    <div
                        className="absolute flex items-center justify-center"
                        style={{
                            borderRadius: '50%',
                            width: `${circleSize}px`, 
                            height: `${circleSize}px`,
                            pointerEvents: 'none',
                        }}
                    >
                        <div //internal circle
                            className= 'rounded-full'
                            style={{
                                backgroundColor: `${innerCircleColor}`,
                                width: `${innerCircleSize}px`,
                                height: `${innerCircleSize}px`,
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                )}
            </div>
            <span
                style={{
                    fontSize: `${fontSize}px`,
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
