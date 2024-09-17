interface ButtonProps {
    className?: string
    type?: 'button' | 'submit' | 'reset'
    style?: any
    text?: string
    textStyle?: any
    onClick?: () => void
    
}

export default function Button({className='', type='button', style, text, textStyle, onClick }: ButtonProps) {
    return (
        <button className={`${className} flex items-center justify-center`} onClick={onClick} style={{borderRadius: '6px', paddingTop: '16px', paddingBottom: '16px', ...style}}>
            <span style={{...textStyle}}>
                {text}
            </span>
        </button>
    )
}