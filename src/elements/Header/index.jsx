import { HeaderNav } from "../HeaderNav"
import { SmallButton } from "../SmallButton"
import "./Header.css"





export const Header = (props) => {

    

    
    return (
        <>
            <HeaderNav headerLogo="/assets/logoZoo.png"/>
            <section className="headerImg" style={{backgroundImage: `url(${props.image})` }}>
                <div>
                    <h2>Explore o lado feroz do mundo</h2>
                    <SmallButton text="Comprar ingressos" />
                </div>
            </section>
        </>
    )
}