import "./InfoBlock.css"

export const InfoBlock = (props) => {
    return (
        <>
            <div className="infoBlockContainer">
                <img src="assets\canine-pawprint-svgrepo-com.svg" alt="" />
                <strong><h3>{props.title}</h3></strong>
                <p>{props.text}</p>
            </div>
        </>
    )
}