export default function ThirdRegisterSection() {
    return (
        <div className='flex justify-left items-start'>
            <div className='flex flex-col justify-left items-start px-0 gap-6'>
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'rgba(57, 63, 70, 1)', padding: '0px 16px'}}>O que você vai encontrar?</span>
                <img src={`register-prints.svg`} className='w-full pb-20' />
            </div>
        </div>
    )
}