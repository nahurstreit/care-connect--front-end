'use client'
import Button from '@/components/Button.component'
import { useRouter } from 'next/navigation'

export default function SplashScreen() {
	const router = useRouter()
	const goToLogin = () => {
		router.push('/login')
	}

	const goToRegister = () => {
		router.push('/register')
	}

	return (
		<div
			style={{
				background: 'linear-gradient(180deg, rgba(239, 83, 86, 0.35) 0%, rgba(197, 196, 99, 0.35) 51.73%, rgba(250, 174, 65, 0.35) 98.5%)',
				height: '100vh',
				padding: '16px',
				boxSizing: 'border-box',
			}}
		>
			<div className='flex items-center justify-center h-full pb-5'>
				<div className='flex flex-col justify-left items-start px-3 gap-2'>
					<img src={`logo-careconnect.svg`} className='w-full' />
					<span style={{ fontSize: '24px', fontWeight: '400', color: 'rgba(239, 83, 86, 1)', padding: '0px 16px'}}>{`Conectando você ao seu bem-estar`}</span>
				</div>
			</div>
			
			<div className='flex justify-between fixed bottom-0 left-0 right-0 p-4'>
				<Button 
					className='flex-1 max-w-[calc(50%-8px)]'
					onClick={goToLogin} 
					text='Entrar'
					style={{
						height: '52px',
						padding: '16px 64px',
						border: '2px solid rgba(192, 207, 224, 1)',
						borderRadius: '6px',
						background: 'rgba(242, 240, 240, 1)',
						opacity: 1,
					}}
					textStyle={{
						fontSize: '16px',
						fontWeight: 500,
						color: 'rgba(80, 85, 92, 1)',
					}}
				/>
				<Button 
					className='flex-1 max-w-[calc(50%-8px)]'
					onClick={goToRegister} 
					text='Cadastrar'
					textStyle={{
						fontSize: '16px',
						fontWeight: 500,
						color: 'rgba(58, 60, 0, 1)',
					}}
					style={{
						height: '52px',
						padding: '16px 64px',
						borderRadius: '6px',
						background: 'rgba(197, 196, 99, 1)',
						opacity: 1,
					}}
				/>
			</div>
		</div>
	)
}
