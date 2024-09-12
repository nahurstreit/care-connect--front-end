import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

interface SectionTitleProps {
    mainTitle: string
    seeAll?: string
}

export default function SectionTitle({mainTitle}: SectionTitleProps) {
    return (
        <div className='flex justify-between items-center'>
            <h1 className={`${poppins.className}`}
                style={{color: `rgba(197, 196, 99, 1)`, textAlign:'left', fontSize:'16px'}}
            >
                {mainTitle}
            </h1>
            <a className={`${poppins.className}`}
                style={{color: `rgba(239, 83, 86, 1)`, textAlign:'right', fontSize:'16px'}}
            >
                {`Ver tudo`}
            </a>
        </div>
    )
}