import "./SmallButtonGreen.css"

export const SmallButtonGreen = (props) => {
    return (
        <>
            <a className="smallButtonGreen" href="">
                {props.text}
                <img className="icon" src="/assets/up-right-from-square-solid-full.svg" alt="" />
            </a>
        </>
    )
}