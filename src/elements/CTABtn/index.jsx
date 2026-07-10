import { Link } from "react-router-dom"
import "./CTABtn.css"

export const CTABtn = (props) => {
    return (
        <> <Link to={props.to} className="ctaBtn" >
            <h2>{props.text}</h2>
        </Link>

        </>
    )
}