'use client'
import ItemRadioCheckbox from './ItemRadioCheckBox.component'

interface DisplayRadioCheckBoxProps {
    items: string[]
    itemFontSize?: number
    itemGap?: number
    itemLabelGap?: number
    label?: string
    circleSize?: number
    circleBorderColor?: string
    selectedInnerColor?: string
    selectedValue: string //controls the selected value
    onChange: (value: string) => void //Give back the selected value to parent
}

export default function DisplayRadioCheckBox({ items, itemFontSize, itemGap=3, itemLabelGap=0, label, circleSize, circleBorderColor, selectedInnerColor, selectedValue, onChange }: DisplayRadioCheckBoxProps) {
    return (
        <div className='flex flex-col w-full' style={{paddingLeft: '12px', gap: `${itemLabelGap}px`}}>
            {label && (
                <label
                    className="mb-1"
                    style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        fontWeight: 400,
                        color: 'rgba(57, 63, 70, 1)',
                        marginBottom: '4px',
                    }}
                >
                    {label}
                </label>
            )}
            <div style={{display: 'flex', flexWrap:'wrap', gap:`${itemGap}px`}}>
                {items.map((item, index) => (
                    <div key={index}>
                        <ItemRadioCheckbox 
                            label={item} 
                            fontSize={itemFontSize}
                            checked={selectedValue === item}
                            circleSize={circleSize}
                            externalBorderColor={circleBorderColor}
                            innerCircleColor={selectedInnerColor}
                            onChange={() => onChange(item)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
