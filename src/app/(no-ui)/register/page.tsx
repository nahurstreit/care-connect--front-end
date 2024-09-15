'use client'
import React, { useRef, useEffect } from 'react'
import PageCarousel from '@/components/Carousel/PageCarousel.component'
import { FirstRegisterSection, SecondRegisterSection, ThirdRegisterSection, FourthRegisterSection} from './sections'

export default function Register() {
    return (
        <div className='h-screen p-4 box-border overflow-hidden'>
            <PageCarousel>
                <FirstRegisterSection />
                <SecondRegisterSection />
                <ThirdRegisterSection />
                <FourthRegisterSection />
            </PageCarousel>
        </div>
    )
}