import TextSection from "@/components/TextSection/TextSection.component"

export default function SecondRegisterSection() {
    return (
        <div className='pb-32'>
            <div className='flex flex-col justify-left items-start px-0 gap-6 pb-20'>
                <TextSection 
                    header={{text:`Missão`, fontSize:16}} 
                    body={{text:`Conectar médicos e pacientes de forma segura e eficiente, promovendo uma comunicação mais próxima e humana através de uma plataforma inovadora de redes sociais, facilitando o acesso à saúde e melhorando a qualidade do atendimento`}} 
                />
                <TextSection 
                    header={{text:`Visão`, fontSize:16}} 
                    body={{text:`Ser a principal plataforma global de conexão entre médicos e pacientes, transformando a relação tradicional em uma parceria colaborativa que coloca a saúde e o bem-estar no centro de cada interação.`}} 
                />
                <TextSection 
                    header={{text:`Valores`, fontSize:16}} 
                    bodyHtml={
                        <p
                            style={{
                                color: 'rgba(57, 63, 70, 1)',
                                fontSize: '14px',
                                lineHeight: '21px',
                            }}
                        >
                            <b>Empatia:</b> Colocamos o paciente no centro de tudo o que fazemos, compreendendo suas necessidades e preocupações;<br></br>
                            <b>Inovação:</b> Buscamos continuamente novas maneiras de melhorar a comunicação e o cuidado na área da saúde;<br></br>
                            <b>Segurança:</b> Garantimos a confidencialidade e proteção dos dados de nossos usuários, proporcionando um ambiente seguro para a troca de informações;<br></br>
                            <b>Transparência:</b> Valorizamos a clareza e honestidade nas relações entre médicos, pacientes e nossa equipe;<br></br>
                            <b>Colaboração:</b> Incentivamos a troca de conhecimentos e experiências para construir uma comunidade de saúde mais forte e unida.<br></br>
                        </p>} 
                />
            </div>
        </div>
    )
}
