import Header from '@/components/Header'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <body
    className={`antialiased`}
    style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
        <Header />
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Navbar />
    </body>
  )
}