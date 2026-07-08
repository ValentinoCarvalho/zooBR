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
                    <p>{props.text}</p>
                    <CTABtn text={props.textBtn} />
                </div>
                <img className="imagemLateral" src={props.image} alt="" />

            </section>
        </>
    )
}