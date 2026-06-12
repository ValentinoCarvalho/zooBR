import "./GaleryImg.css"

export const GaleryImg = (props) => {
    return (
        <>
            <section className="galeryImageEffect">

                <img src={props.image} alt="" />

                <p className="imgCreditsGalery">@Person on Unsplash</p>
            </section>
        </>
    )
}