import { CTABtn } from "../CTABtn"
import { NavFloat } from "../NavFloat"
import { SmallButton } from "../SmallButton"
import "./Hero.css"

export const Hero = (props) => {
    return (
        <>
            <section className="hero">
                <div>
                    <strong>
                        <h1>{props.title}</h1></strong>
                    <p>A natureza guarda histórias incríveis, e cada espécie tem um papel essencial para o equilíbrio do planeta.</p>
                    <p>No ZooBRA, você percorre habitats, participa de experiências educativas e descobre como ciência, pesquisa e conservação caminham juntas para proteger a biodiversidade.</p>
                    <p>Muito mais do que um passeio, sua visita contribui para aproximar pessoas da natureza e fortalecer a preservação da vida selvagem.</p>
                </div>
                <img className="imagemLateral" src={props.image} alt="" />

            </section>
                    <CTABtn text={props.textBtn} />
        </>
    )
}