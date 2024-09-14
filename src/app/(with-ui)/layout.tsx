import '../globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header'
import { Suspense, lazy } from 'react'

export default function WithUIRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
			<div
				style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
			>
				<Header />
				{children}
				<Navbar />
			</div>
	)
}