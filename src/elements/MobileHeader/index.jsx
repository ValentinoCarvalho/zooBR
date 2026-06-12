import "./MobileHeader.css"

export const MobileHeader = ()=>{
    return(
        <>
        <header className="mobileHeader">
            <div>
            <input id="hamburgerBtn" type="checkbox" />
                <ul className="hamburgerItems">
                    <a href="">Galeria</a>
                    <a href="">Eventos</a>
                    <a href="">Depoimentos</a>
                    <a href="">Educativo</a>
                    <a href="">Preços e horários</a>
                    <a href="">Mapa do zoológico</a>
                    <a href="">Contato</a>
                </ul>
                </div>
<a href=""><img src="/assets/logoZoo.png" alt="" /></a>
        </header>
        </>
    )
}