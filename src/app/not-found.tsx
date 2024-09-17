import Header from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFound() {
  return (
	<body
    className={`antialiased`}
    style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
        <Header />
		<div className='flex flex-col gap-4 pb-20'>
			<span style={{color: 'rgba(239, 83, 86, 1)', fontSize:'30px', fontWeight:'700'}}>Ops!</span>
			<div className=''>
				<img src='not-found.svg' alt='Página não encontrada'/>
			</div>
			<span style={{color: 'rgba(239, 83, 86, 1)', fontSize:'20px', fontWeight:'500'}}>Página não encontrada...</span>
		</div>
		
        <Navbar />
    </body>
  )
}
