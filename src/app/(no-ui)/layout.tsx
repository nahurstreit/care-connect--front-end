import { Poppins } from 'next/font/google'
import '../globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
})

export default function NoUIRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<body
			className={`${poppins.className} antialiased`}
		>
			{children}
		</body>
	)
}
