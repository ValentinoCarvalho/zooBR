import { SmallButton } from "../SmallButton"
import "./Video.css"

export const Video = () => {

    return (
        <>
            <section className="videoBackground">
                <video className="videoBackgroundItem" src="/videos/6035932-hd_1920_1080_25fps.mp4" muted autoPlay
                    loop></video>

                <div className="itemDeVideo">
                    <h2>Onde a conservação encontra a aventura.</h2>
                    <SmallButton text="Saiba mais" />
                </div>
            </section>
    </>
)

}