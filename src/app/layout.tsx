import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
})

export const metadata: Metadata = {
	title: "Care Connect",
	description: "Conectand você ao seu bem-estar",
}

export default function WithUIRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
            <body className={`${poppins.className} antialiased`}>
            {children}
            </body>
		</html>
	)
}