'use client'
import { useEffect, useRef, useState } from "react"
import SectionTitle from "../SectionTitle.component"
import ItemCarousel from "./ItemCarousel.component"
import PaginationControl from "./PaginationControl.component"

interface CarouselProps {
    mainTitle: string
    carouselLimit?: number
}

export default function Carousel({mainTitle, carouselLimit=10}: CarouselProps) {
    const itemWidth = 127.9
    const itemSpacing = 16
    const items = Array.from({ length: carouselLimit })
    const [currentItem, setCurrentItem] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const calculateTotalPages = () => {
            if(carouselRef.current) {
                const viewportWidth = window.innerWidth
                const itemWidthWithSpacing = itemWidth + itemSpacing
                const itemsPerPage = Math.floor(viewportWidth / itemWidthWithSpacing)
                const pages = Math.ceil(items.length / itemsPerPage)
                setTotalPages(pages)
            }
        }

        calculateTotalPages()

        window.addEventListener('resize', calculateTotalPages)
    }, [items.length])

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const viewportWidth = window.innerWidth
                const scrollLeft = carouselRef.current.scrollLeft
                const itemWidthWithSpacing = itemWidth + itemSpacing
                const itemsPerPage = Math.floor(viewportWidth / itemWidthWithSpacing)
                const newPage = Math.floor(scrollLeft / (viewportWidth - itemWidthWithSpacing))
                setCurrentItem(newPage)
            }
        }

        const carouselElement = carouselRef.current
        carouselElement?.addEventListener('scroll', handleScroll)

        return () => {
            carouselElement?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <SectionTitle mainTitle={mainTitle}/>
            <div
                ref={carouselRef}
                className='relative flex space-x-4'
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    scrollbarWidth: 'none',  // Firefox
                    msOverflowStyle: 'none'  // IE; Edge
                }}
            >
                {
                    items.map((_, i) => (
                        <ItemCarousel key={i} text={`Example ${i+1}`}/>
                    ))
                }
            </div>
            
            <div className="flex justify-center mt-4">
                <PaginationControl maxPage={totalPages} currentPage={currentItem}/>
            </div>
        </>
    )
}
