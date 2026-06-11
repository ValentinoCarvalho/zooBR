import { Navigator } from "../Navigator"
import { SmallButton } from "../SmallButton"
import "./Header.css"


export const Header = (props) => {
    return (
        <>
            <header className="header">
                <a href="index.html" className="zooLogoContainer">
                    <img src={props.headerLogo} alt="" className="zooLogo" />
                    <h2>ZooBR</h2>
                </a>
                <div className="linksHeader">
                    <a href="#galeria">Galeria</a>
                    <a href="#proximosEventos">Eventos</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <a href="./educacao.html">Educativo</a>
                    <a href="./precos-e-horarios.html">Preços e horários</a>
                    <a href="./mapa-zoologico-br.html">Mapa do zoológico</a>
                    <a href="./contato.html">Contato</a>
                </div>
            </header>
            <section className="headerImg">
                <div>
                    <h2>Explore o lado feroz do mundo</h2>
                    <SmallButton text="Comprar ingressos" />
                </div>
            </section>
        </>
    )
}