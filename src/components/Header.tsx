"use client"
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed top-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-white py-3 px-2 shadow-md' : 'bg-white py-4 px-2'
				}`}
		>
			<img
				src='/logo-careconnect.svg'
				alt='Care Connect'
				className='h-12 w-auto'
			/>
		</header>
	)
}

export default Header
