import "./GaleryImg.css"

export const GaleryImg = (props) => {
    return (
        <>
            <section className="galeryImageEffect">

                <img className="galeryImage" src={props.image} alt="" />

                <p className="imgCreditsGalery">{props.author}</p>
            </section>
        </>
    )
}