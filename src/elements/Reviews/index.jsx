import "./Reviews.css"

export const Reviews = (props) => {
    return (
    <>
        <div className="reviewContainer">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <h4>{props.major}</h4>
            <p>{props.text}</p>
        </div>
    </>
    )

}