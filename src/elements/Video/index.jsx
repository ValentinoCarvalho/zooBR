import { CTABtn } from "../CTABtn"
import { SmallButton } from "../SmallButton"
import "./Video.css"

export const Video = (props) => {

    return (
        <>
            <section className="videoBackground">
                <video className="videoBackgroundItem" src="/videos/6035932-hd_1920_1080_25fps.mp4" muted autoPlay
                    loop></video>

                <div className="itemDeVideo">
                    <h2>{props.text}</h2>
                   <CTABtn text="GARANTIR INGRESSO" />
                </div>
            </section>
    </>
)

}