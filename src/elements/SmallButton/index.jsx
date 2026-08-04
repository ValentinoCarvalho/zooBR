import { Link } from "react-router-dom"
import "./SmallButton.css"

export const SmallButton = (props) => {
    return (
        <>
            <Link className="smallButton" to={"/ingressos"} onClick={() => window.scrollTo({top:0})} >
            {props.text}
            <img className="icon" src="./assets/arrow-up-right-from-square-solid-full.svg" alt="" />
        </Link >
        </>
    )
}