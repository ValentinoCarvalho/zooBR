import { SmallButton } from "../SmallButton"
import "./ContentITEvent.css"

export const ContentITEvent = (props) => {
    return (
        <>

            <section className="contentITEventContainer" style={{backgroundImage: `url(${props.image})`}}>
                <div className="contentITFadeEvent">
                    <strong> <h2>{props.title}</h2></strong>
                    <p>{props.text}</p>
                    <SmallButton text={props.day} />
                </div>
            </section>

        </>
    )

}