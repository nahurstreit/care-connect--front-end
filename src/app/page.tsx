import TextSection from '@/components/TextSection/TextSection.component'
import SectionTitle from '@/components/SectionTitle.component'
import Carousel from '@/components/Carousel/Carousel.component'

export default function Home() {
  return (
    <main className='pt-4 pb-12 px-4'>
        <div className='flex flex-col space-y-4'>
            <TextSection 
                header={{text:'Educação', textAlign:'left', fontSize:16}}
                body={{
                    text: 'Explore uma ampla gama de conteúdos, vídeos e atividades interativas cuidadosamente selecionadas por nossa equipe de especialistas em saúde. De dicas à conhecimentos mais aprofundados, estamos aqui para fornecer informações valiosas que ajudarão você a tomar decisões informadas sobre seu bem-estar.', 
                    textAlign:'left'
                }}/>
            <Carousel mainTitle='Recomendados para você'/>
            <Carousel mainTitle='Novidades!'/>
        </div>
    </main>
    )
}