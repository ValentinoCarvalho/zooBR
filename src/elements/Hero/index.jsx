import { CTABtn } from "../CTABtn"
import { NavFloat } from "../NavFloat"
import { SmallButton } from "../SmallButton"
import "./Hero.css"

export const Hero = () => {
    return (
        <>
            <section className="hero">
                <div>
                    <strong>
                        <h1>Boas-vindas ao Mundo Selvagem</h1></strong>
                    <p>Descubra espécies fascinantes, aprenda sobre conservação ambiental e embarque em uma aventura pelo
                        reino animal.</p>
                    <CTABtn text="COMPRAR INGRESSOS" />
                </div>
                <img className="imagemLateral" src="/images/polarBear.webp" alt="" />

            </section>
        </>
    )
}