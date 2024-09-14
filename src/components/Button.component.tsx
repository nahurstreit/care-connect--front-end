interface ButtonProps {
    className?: string
    style?: any
    text?: string
    textStyle?: any
    onClick?: () => void
    
}

export default function Button({className='',style, text, textStyle, onClick }: ButtonProps) {
    return (
        <button className={`${className} flex items-center justify-center `} onClick={onClick} style={style}>
            <span style={textStyle}>
                {text}
            </span>
        </button>
    )
}