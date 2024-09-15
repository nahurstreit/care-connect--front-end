import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
})

interface TextSectionProps {
    header?: TextProps
    body?: TextProps
    bodyHtml?: JSX.Element
}

interface TextProps {
    text: string
    textAlign?: 'left' | 'right' | 'center' | 'justify'
    fontSize?: number
    lineHeight?: number
}

export default function TextSection({header, body, bodyHtml}: TextSectionProps) {
    return (
        <div>
            {header && (
                <h1
                    className={`${poppins.className} font-bold pb-2`}
                    style={{
                        color: `rgba(57, 63, 70, 1)`, 
                        textAlign: header.textAlign, 
                        fontSize: header.fontSize ? `${header.fontSize}px` : '14px'
                }}
                >
                    {header.text}
                </h1>
            )}
            {body && (
                 <p
                 className={`${poppins.className}`}
                 style={{
                     color: 'rgba(57, 63, 70, 1)',
                     textAlign: body.textAlign,
                     fontSize: body.fontSize ? `${body.fontSize}px` : '14px',
                     lineHeight: body.lineHeight ? `${body.lineHeight}px` : '21px',
                 }}
             >
                 {body.text}
             </p>
            )}
            {bodyHtml && (
                <>
                    {bodyHtml}
                </>
            )}
        </div>
    )
}