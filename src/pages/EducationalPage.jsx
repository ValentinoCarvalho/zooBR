import { Footer } from "../elements/Footer"
import { Header } from "../elements/Header"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import { Notification } from "../elements/Notification/Notification"
import { useState } from "react"
import './pagesStyles/ContactPage.css'
import { InfoBlock } from "../elements/InfoBlock"
import { Hero } from "../elements/Hero"
import { HeroNoPhoto } from "../elements/HeroNoPhoto/HeroNoPhoto"
import { ContentIT } from '../elements/ContentIT'
import './pagesStyles/EducationalPage.css'
import { SmallButton } from "../elements/SmallButton"
import { GoodHero } from "../elements/GoodHero/GoodHero"
import { CTABtn } from "../elements/CTABtn"

export const EducationalPage = () => {
    const [displayNotification, setDisplayNotification] = useState(false)

    return (<>
        <MobileHeader />

        <Header title="APRENDIZADO QUE INSPIRA A CONSERVAÇÃO" text="Conhecer é o primeiro passo para preservar." image="/images/banner.png" />

        <main>

            <section className="yellowSection">

                <GoodHero title="Mais do que entretenimento" text="No ZooBRA acreditamos que conhecer a natureza é o primeiro passo para protegê-la. Nossos programas educativos unem ciência, conservação e experiências práticas para aproximar pessoas de todas as idades da vida selvagem." image="\images\pexels-atiek-arief-2154698689-37875511.jpg" />

                <ContentIT title="Visitas Escolares" text="O ZooBRA recebe escolas de todo o país com roteiros personalizados para diferentes faixas etárias. Professores contam com materiais de apoio, oficinas e atividades alinhadas aos conteúdos curriculares." image="/images/the-tampa-bay-estuary-program-IcUQNzaHrvg-unsplash.jpg" />

                <ContentIT title="Compromisso com os Objetivos de Desenvolvimento Sustentável" text="O ZooBRA desenvolve ações alinhadas à Agenda 2030 das Nações Unidas, promovendo educação de qualidade, conservação da biodiversidade, consumo responsável e conscientização ambiental." image="/images/odsPic.avif" />

                <ContentIT title="Conservação na prática" text="Muito além da visitação, nossa equipe participa de programas de conservação, manejo de espécies ameaçadas, pesquisas científicas e projetos de educação ambiental." image="/images/pexels-mypicworld-1695717.jpg" color="white" />

                <GoodHero title="Centro Educacional" text="O Centro Educacional do ZooBRA promove palestras, oficinas, cursos e experiências práticas voltadas para estudantes, professores e famílias interessadas em aprofundar seus conhecimentos sobre biodiversidade." image="\images\frederick-shaw-llXWZUAQz5A-unsplash.jpg" />

                <section className="agendeSection">
                    <div>
                <h2 className="h2Verde">Agende uma visita pedagógica hoje mesmo:</h2>
                        <p>Leve sua turma para uma experiência que une ciência, conservação e descoberta. As visitas são adaptadas à faixa etária dos estudantes e conduzidas por educadores especializados, tornando o aprendizado mais envolvente e próximo da natureza.</p>
                        <img className="linhaDoTempoFoto" src="\images\colecaoFotos.png" alt="" />
                    </div>
                    <ul className="visitTimeLine">

                        <li>
                            <h2>Como funciona:</h2>
                            <h3>Recepção</h3>
                            <p>Recebemos o grupo, apresentamos o roteiro da visita e compartilhamos orientações para garantir uma experiência segura e proveitosa.</p>
                        </li>
                        <li>
                            <h3>Apresentação</h3>
                            <p>Uma breve introdução apresenta a biodiversidade, os projetos de conservação do ZooBRA e os objetivos da atividade educativa.</p>

                        </li>
                        <li>
                            <h3>Visita guiada</h3>
                            <p>Os participantes percorrem os habitats acompanhados por educadores, conhecendo curiosidades, comportamentos e a importância de cada espécie.</p>

                        </li>
                        <li>
                            <h3>Atividade prática</h3>
                            <p>Os alunos participam de oficinas, desafios ou dinâmicas interativas que reforçam os conteúdos aprendidos durante a visita.</p>

                        </li>
                        <li>
                            <h3>Encerramento</h3>
                            <p>Finalizamos com um momento para perguntas, troca de experiências e reflexões sobre como cada pessoa pode contribuir para a conservação da natureza.</p>

                        </li>
                    </ul>
                </section>
                <CTABtn text="Agendar" to="/contato" />
            </section>
        </main >
        <Footer />
    </>)
}