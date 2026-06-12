import { InfoBlock } from "../InfoBlock"
import "./InfoBlockContainer.css"

export const InfoBlockContainer = ()=>{
    return(
        <>
        <section className="infoBlockSection">
        <InfoBlock title="3M+
VISITANTES ANUAIS" text="Explorando a natureza conosco." />
        <InfoBlock title="350+ ESPÉCIES" text="Representando a biodiversidade global." />
        <InfoBlock title="8.000+
ANIMAIS" text="Protegidos e cuidados diariamente." />
        <InfoBlock title="45
HECTARES" text="De áreas verdes e habitats naturais." />
        <InfoBlock title="50+
PROJETOS" text="Dedicados à conservação da fauna." />
        <InfoBlock title="DESDE 1985" text="Quatro décadas de impacto ambiental." />

        </section>
        </>
    )
}