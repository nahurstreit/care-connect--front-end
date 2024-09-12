import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500']
})

interface ItemCarouselProps {
    text?: string
}

export default function ItemCarousel({text }: ItemCarouselProps) {
    return (
        <div className='w-[127.9px] h-auto flex-shrink-0'>
            <div className="rounded-[8px] border border-[#b0c1d9] border-opacity-50 p-4 bg-white shadow-[0_0_10px_rgba(30,38,65,0.05)] flex items-center justify-center">
                <img src='image-placeholder.svg' className="w-full h-auto max-h-[62px] object-cover" />
            </div>
            {text && (
                <p
                    className={`mt-2 ${poppins.className} text-[rgba(57,63,70,1)] w-full text-left`}
                    style={{ fontSize:'14px' }}
                >
                    {`${text}`}
                </p>
            )}

        </div>
    )
}
