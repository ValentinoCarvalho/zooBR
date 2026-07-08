import { HeaderNav } from "../HeaderNav"
import { SmallButton } from "../SmallButton"
import "./Header.css"

export const Header = (props) => {
    return (
        <>
            <HeaderNav headerLogo="/assets/logoZoo.png"/>
            <section className="headerImg" style={{backgroundImage: `url(${props.image})` }}>
                <div className="headerContentContainer">
                    <h2>{props.title}</h2>
                    <p className="heroText">{props.text} <strong className="heroPrice">{props.strong}</strong></p>
                    <SmallButton text="Comprar ingressos" />
                </div>
            </section>
        </>
    )
}