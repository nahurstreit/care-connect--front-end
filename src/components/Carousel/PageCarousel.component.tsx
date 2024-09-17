import React, { useState, useRef, useEffect } from 'react'
import PaginationControl from '../PaginationControl.component'

interface CarouselProps {
  children: React.ReactNode[]
}

export default function PageCarousel({ children }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft
        const pageWidth = carouselRef.current.clientWidth
        const newPage = Math.round(scrollPosition / pageWidth)
        setCurrentPage(newPage)
      }
    }

    const carouselElement = carouselRef.current
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      ref={carouselRef}
      className="overflow-x-auto h-full flex w-full snap-x snap-mandatory gap-3"
      style= {{
        scrollBehavior: 'smooth',
        transition: 'scroll-left 0.1s ease-in-out',
      }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full snap-start h-auto overflow-y-auto flex justify-center"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            minHeight: '80vh',
          }}
        >
          {child}
        </div>
      ))}
      <div className='flex items-center justify-center fixed bottom-0 left-0 right-0 pt-8 pb-12 px-4 bg-white'>
        <PaginationControl maxPage={children.length} currentPage={currentPage} dotSize={16} />
      </div>
    </div>
  )
}
