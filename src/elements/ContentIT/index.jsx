import "./ContentIT.css"

export const ContentIT = (props) => {
    return (
        <>

            <section className="contentITContainer" style={{backgroundImage: `url(${props.image})`}}>
                <div className="contentITFade">
                    <strong> <h2>{props.title}</h2></strong>
                    <p>{props.text}</p>
                </div>
            </section>

        </>
    )

}