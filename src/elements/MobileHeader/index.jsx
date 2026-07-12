import "./MobileHeader.css"
import { Link } from "react-router-dom"

export const MobileHeader = () => {
    return (
        <>
            <div className="mobileHeaderSpace"></div>
            <header className="mobileHeader">
            <Link to="/"><img src="/assets/logoZoo.png" alt="" /></Link>
                <div>
                    <input id="hamburgerBtn" type="checkbox" />
                    <ul className="hamburgerItems">
                        <Link to="/ingressos">Ingressos</Link>
                        <Link to="">Eventos</Link>
                        <Link to="">Depoimentos</Link>
                        <Link to="/educativo">Educativo</Link>
                        <Link to="">Preços e horários</Link>
                        <Link to="/mapa">Mapa do zoológico</Link>
                        <Link to="/contato">Contato</Link>
                    </ul>
                </div>
            </header>
        </>
    )
}