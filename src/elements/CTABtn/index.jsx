import { Link } from "react-router-dom"
import "./CTABtn.css"

export const CTABtn = (props) => {
    return (
        <> <Link className="ctaBtn" to={"/ingressos"} onClick={() => window.scrollTo({top:0})}>
            <h2>{props.text}</h2>
        </Link>

        </>
    )
}