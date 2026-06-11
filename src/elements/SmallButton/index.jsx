import "./SmallButton.css"

export const SmallButton = (props) => {
    return (
        <>
            <a className="smallButton" href="">
                {props.text}
                <img className="icon" src="./assets/arrow-up-right-from-square-solid-full.svg" alt="" />
            </a>
        </>
    )
}