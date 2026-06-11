import "./GaleryImg.css"

export const GaleryImg = (props) => {
    return (
        <>
            <section className="galeryImageEffect">

                <img className="galeryImageEffect" src={props.image} alt="" />

                <p className="imgCreditsGalery">@Person on Unsplash</p>
            </section>
        </>
    )
}