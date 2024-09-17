"use client"
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500']
})

interface IconNavBarProps {
    href: string
    iconName: string
    hoverText: string
    customBorderColor?: string
}

export default function IconNavBar({href, iconName, hoverText, customBorderColor=`rgba(239, 83, 86, 1)`}: IconNavBarProps) {
    if(usePathname() === href) {
        return(
            <a 
                href={href} 
                className="hover:text-gray-300 flex items-center border border-gray-300 rounded-[24px] px-4 py-2"
                style={{ border: `1px solid ${customBorderColor}` }}
            >
                <img 
                    src={`/icons/navbar/${iconName}-on.svg`} 
                    alt={hoverText}
                    className="h-6 w-6"
                />
                <span 
                    className={`ml-2 text-sm ${poppins.className}`}
                    style={{color: `rgba(57, 63, 70, 1)`}}
                >{hoverText}</span>
                
            </a>
        )
    }

    return (
        <a href={href}>
            <img 
                src={`/icons/navbar/${iconName}.svg`} 
                alt={hoverText}
                style={{width: '24px', height: '24px'}}
            />
        </a>
    )
}