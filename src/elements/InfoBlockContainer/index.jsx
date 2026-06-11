import { InfoBlock } from "../InfoBlock"
import "./InfoBlockContainer.css"

export const InfoBlockContainer = ()=>{
    return(
        <>
        <section className="infoBlockSection">
        <InfoBlock title="+3 Milhões de Visitantes Anuais" text="Um dos destinos mais visitados da América Latina." />
        <InfoBlock title="+350 Espécies" text="Da savana africana às florestas tropicais da América do Sul, nosso zoológico abriga uma incrível diversidade de fauna." />
        <InfoBlock title="+8.000 Animais" text="Cada espécie recebe atenção dedicada de nossa equipe de veterinários, biólogos e tratadores." />
        <InfoBlock title="45 Hectares de Natureza" text="Um dos maiores complexos zoológicos do mundo, com trilhas, lagos, áreas temáticas e habitats imersivos, há sempre algo novo para descobrir." />
        <InfoBlock title="+50 Projetos de Conservação" text="Participamos de programas de preservação, pesquisa científica e reprodução de espécies ameaçadas." />

        <InfoBlock title="Desde 1985" text="Uma história construída em prol da natureza e da conscientização ambiental." />

        </section>
        </>
    )
}