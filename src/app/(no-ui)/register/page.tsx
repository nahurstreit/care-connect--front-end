import PaginationControl from "@/components/PaginationControl.component";

export default function Register() {
    return (
        <div style={{
            height: '100vh',
            padding: '16px',
            boxSizing: 'border-box',
        }}>
            <div className='flex items-center justify-center h-full'>
				<div className='flex flex-col justify-left items-start px-0 gap-6'>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(57, 63, 70, 1)', padding: '0px 16px'}}>Seja bem-vindo(a) à</span>
					<img src={`logo-careconnect.svg`} className='w-full' />
					<span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(57, 63, 70, 1)', padding: '0px 16px'}}>Estamos determinados a tornar sua jornada de saúde e autocuidado mais acessível, envolvente e socialmente conectada do que nunca. <br/><br/> Somos uma plataforma inovadora que reúne uma variedade de recursos de saúde e bem-estar em um único aplicativo, oferecendo a você a oportunidade de aprender, se envolver e se conectar com pessoas e empresas que estão alinhadas à sua jornada.</span>
				</div>
			</div>
            <div className='flex items-center justify-center fixed bottom-0 left-0 right-0 py-8 px-4'>
                <PaginationControl maxPage={4} currentPage={0} dotSize={16} />
            </div>
        </div>
    )
}