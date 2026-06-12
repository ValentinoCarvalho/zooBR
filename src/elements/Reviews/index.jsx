import "./Reviews.css"

export const Reviews = (props) => {
    return (
    <>
        <div className="reviewContainer">
            <div className="reviewPerson">
            <img src={props.image} alt="" />
            <div>
            <h3>{props.title}</h3>
            <h4>{props.major}</h4>
            <div className="rating">
                <img src="/assets/star-solid-full.svg" alt="" />
                <img src="/assets/star-solid-full.svg" alt="" />
                <img src="/assets/star-solid-full.svg" alt="" />
                <img src="/assets/star-solid-full.svg" alt="" />
                <img src="/assets/star-solid-full.svg" alt="" />
            </div>
            </div>
            </div>
            <p>{props.text}</p>
        </div>
    </>
    )

}