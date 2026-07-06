import { HeaderNav } from "../HeaderNav"
import { SmallButton } from "../SmallButton"
import "./Header.css"

export const Header = (props) => {
    return (
        <>
            <HeaderNav headerLogo="/assets/logoZoo.png"/>
            <section className="headerImg" style={{backgroundImage: `url(${props.image})` }}>
                <div className="headerContentContainer">
                    <h2>Explore o lado feroz do mundo</h2>
                    <p className="heroText">Ingressos a partir de <strong className="heroPrice">100,00R$</strong></p>
                    <SmallButton text="Comprar ingressos" />
                </div>
            </section>
        </>
    )
}