import { Bigtext } from "../elements/Bigtext"
import { ContentIT } from "../elements/ContentIT"
import { ContentITEvent } from "../elements/ContentITEvent"
import { CTABtn } from "../elements/CTABtn"
import { Footer } from "../elements/Footer"
import { Galery } from "../elements/Galery"
import { GaleryImg } from "../elements/GaleryImg"
import { GoodHero } from "../elements/GoodHero/GoodHero"
import { GoogleMap } from "../elements/GoogleMap"
import { Header } from "../elements/Header"
import { Hero } from "../elements/Hero"
import { InfoBlockContainer } from "../elements/InfoBlockContainer"
import { MobileHeader } from "../elements/MobileHeader"
import { NavFloat } from "../elements/NavFloat"
import { Reviews } from "../elements/Reviews"
import { SmallButtonGreen } from "../elements/SmallButtonGreen"
import { Testimonials } from "../elements/Testimonials"
import { Video } from "../elements/Video"

export const MainPage = () => {
    const banners = ['/images/banners/banner0.png', '/images/banners/banner1.png', '/images/banners/banner2.png','/images/banners/banner3.png', '/images/banners/banner4.png', '/images/banners/banner5.png']
    
    const dataTempo = new Date
    const mesTempo = dataTempo.getMonth()
    const diaTempo = dataTempo.getDate()

    const mesesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro']
    return (
        <>

            <MobileHeader />

            <Header title="Explore o lado feroz do mundo" text="Ingressos a partir de " strong="R$100,00" image={banners[Math.floor(Math.random()*banners.length)]} />

            <main>

                <Hero title="Boas-vindas ao Mundo Selvagem" image="\images\polarBear.png" textBtn="Comprar Ingressos"/>
                
                <Bigtext text="SOMOS O MAIOR ZOOLÓGICO DA AMÉRICA LATINA"/>

                <InfoBlockContainer />

                <Bigtext text="VÁRIAS ATIVIDADES DIVERTIDAS E EDUCATIVAS" />

                <ContentIT title="Dia do Tratador" text="Conheça a rotina dos profissionais que cuidam dos animais e veja como são realizados os procedimentos de alimentação, enriquecimento ambiental e cuidados veterinários." image="/images/duong-thinh-ShUibQcKM1w-unsplash.webp" />

                <ContentIT title="Encontro com os Gigantes" text="Participe de uma apresentação especial sobre elefantes, girafas e rinocerontes. Aprenda fatos surpreendentes sobre suas características, comportamentos e desafios de conservação." image="/images/chris-curry-H6zkZItfkQo-unsplash.webp" />

                <ContentIT title="Veja os reis da savana em ação!" text="Acompanhe nossos tratadores durante a alimentação de leões, tigres e onças. Descubra curiosidades sobre seus hábitos, alimentação e importância para o equilíbrio dos ecossistemas." image="/images/zdenek-machacek-UxHol6SwLyM-unsplash.webp" />


                <section className="yellowSection">
                    <Video text="Conheça nossos animais!" />

                    <Bigtext text="GALERIA" id="galeria" color="var(--black)" />

                    <Galery />

                    <Bigtext text="LOCALIZAÇÃO ACESSÍVEL" color="var(--black)" />

                    <GoogleMap />

                    <Bigtext text="DEPOIMENTOS" id="depoimentos" color="var(--black)" />

                    <Testimonials />

                    <Bigtext text="PRÓXIMOS EVENTOS" id="proximosEventos" color="var(--black)" />

                    <ContentITEvent title="Noite dos Oceanos" text='O aquário é transformado em uma experiência noturna com iluminação temática, palestras de biólogos marinhos, alimentação especial dos animais e exibição de espécies raramente apresentadas ao público.' image="/images/eric-aiden-SywC065r66s-unsplash.webp" day={`${diaTempo < 20 ? diaTempo + 9 : 16} de ${diaTempo < 26 ? mesesNomes[mesTempo] : mesesNomes[mesTempo + 1]}`} />

                    <ContentITEvent title="O museu ganha vida após o anoitecer." text='Uma experiência imersiva com projeções, sons ambientes, atores caracterizados como paleontólogos e apresentações especiais que recriam o mundo dos dinossauros.' image="/images/narciso-arellano-XGs1Dwk9V9M-unsplash.webp" day={`${diaTempo < 15 ? diaTempo + 15 : 9} de ${diaTempo < 26 ? mesesNomes[mesTempo] : mesesNomes[mesTempo + 1]}`} />

                    <ContentITEvent title="Noite das Borboletas Luminescentes" image="/images/sarah-brown-Ra5Q6qXZYrE-unsplash.webp" text="Por uma única noite, o Reino das Borboletas recebe uma iluminação especial inspirada em florestas bioluminescentes. Guias apresentam espécies raras, curiosidades sobre metamorfose e uma exposição artística de asas gigantes iluminadas." day={`${diaTempo < 26 ? diaTempo + 4 : 7} de ${diaTempo < 26 ? mesesNomes[mesTempo] : mesesNomes[mesTempo + 1]}`} />

                </section>
            </main>
            <Footer />
        </>
    )
}