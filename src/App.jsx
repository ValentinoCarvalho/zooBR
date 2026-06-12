import { Bigtext } from "./elements/Bigtext"
import { ContentIT } from "./elements/ContentIT"
import { ContentITEvent } from "./elements/ContentITEvent"
import { Footer } from "./elements/Footer"
import { Galery } from "./elements/Galery"
import { GaleryImg } from "./elements/GaleryImg"
import { GoogleMap } from "./elements/GoogleMap"
import { Header } from "./elements/Header"
import { Hero } from "./elements/Hero"
import { InfoBlockContainer } from "./elements/InfoBlockContainer"
import { MobileHeader } from "./elements/MobileHeader"
import { Navigator } from "./elements/Navigator"
import { Reviews } from "./elements/Reviews"
import { SmallButtonGreen } from "./elements/SmallButtonGreen"
import { Testimonials } from "./elements/Testimonials"
import { Video } from "./elements/Video"

function App() {

  return (
    <>
      <MobileHeader />
      <Header headerLogo="/assets/logoZoo.png" />


      <main>

        <Hero />

        <Bigtext text="SOMOS O MAIOR ZOOLÓGICO DA AMÉRICA LATINA" />

        <InfoBlockContainer />

        <Bigtext text="VÁRIAS ATIVIDADES DIVERTIDAS E EDUCATIVAS" />

        <ContentIT title="Dia do Tratador" text="Conheça a rotina dos profissionais que cuidam dos animais e veja como são realizados os procedimentos de alimentação, enriquecimento ambiental e cuidados veterinários." image="/images/duong-thinh-ShUibQcKM1w-unsplash.webp" />

        <ContentIT title="Encontro com os Gigantes" text="Participe de uma apresentação especial sobre elefantes, girafas e rinocerontes. Aprenda fatos surpreendentes sobre suas características, comportamentos e desafios de conservação." image="/images/chris-curry-H6zkZItfkQo-unsplash.webp" />

        <ContentIT title="Veja os reis da savana em ação!" text="Acompanhe nossos tratadores durante a alimentação de leões, tigres e onças. Descubra curiosidades sobre seus hábitos, alimentação e importância para o equilíbrio dos ecossistemas." image="/images/zdenek-machacek-UxHol6SwLyM-unsplash.webp" />

        <section className="yellowSection">
          <Video text="Conheça nossos animais!" />

          <Bigtext text="GALERIA" id="galeria" color="black" />

          <Galery />

          <Bigtext text="LOCALIZAÇÃO ACESSÍVEL" color="black" />

          <GoogleMap />

          <Bigtext text="DEPOIMENTOS" id="depoimentos" color="black" />

          <Testimonials />

          <Bigtext text="PRÓXIMOS EVENTOS" id="proximosEventos" color="black" />

          <ContentITEvent title="Noite dos Oceanos" text='O aquário é transformado em uma experiência noturna com iluminação temática, palestras de biólogos marinhos, alimentação especial dos animais e exibição de espécies raramente apresentadas ao público.' image="/images/eric-aiden-SywC065r66s-unsplash.webp" day="24 de junho" />

          <ContentITEvent title="O museu ganha vida após o anoitecer." text='Uma experiência imersiva com projeções, sons ambientes, atores caracterizados como paleontólogos e apresentações especiais que recriam o mundo dos dinossauros.' image="/images/narciso-arellano-XGs1Dwk9V9M-unsplash.webp" day="29 de junho" />

          <ContentITEvent title="Noite das Borboletas Luminescentes" image="/images/sarah-brown-Ra5Q6qXZYrE-unsplash.webp" text="Por uma única noite, o Reino das Borboletas recebe uma iluminação especial inspirada em florestas bioluminescentes. Guias apresentam espécies raras, curiosidades sobre metamorfose e uma exposição artística de asas gigantes iluminadas." day="16 de julho" />

        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
