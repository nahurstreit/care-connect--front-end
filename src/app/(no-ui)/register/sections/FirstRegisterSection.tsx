export default function FirstRegisterSection() {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-left items-start px-0 gap-6'>
                <span style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(57, 63, 70, 1)', padding: '0px 16px'}}>Seja bem-vindo(a) à</span>
                <img src={`logo-careconnect.svg`} className='w-full' />
                <span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(57, 63, 70, 1)', padding: '0px 16px'}}>Estamos determinados a tornar sua jornada de saúde e autocuidado mais acessível, envolvente e socialmente conectada do que nunca. <br/><br/> Somos uma plataforma inovadora que reúne uma variedade de recursos de saúde e bem-estar em um único aplicativo, oferecendo a você a oportunidade de aprender, se envolver e se conectar com pessoas e empresas que estão alinhadas à sua jornada.</span>
            </div>
        </div>
    )
}