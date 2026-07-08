import "./InfoBlock.css"

export const InfoBlock = (props) => {
    return (
        <>
            <div className="infoBlockContainer" style={{backgroundColor: props.background}}>
                <img src="assets\canine-pawprint-svgrepo-com.svg" alt="" />
                <strong><h3>{props.title}</h3></strong>
                <p>{props.text}</p>
            </div>
        </>
    )
}