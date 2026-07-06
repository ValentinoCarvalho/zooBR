import { Footer } from "../elements/Footer"
import { Header } from "../elements/Header"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import './pagesStyles/MapPage.css'

export const MapPage = () => {
    return (<>
        <HeaderNav headerLogo="/assets/logoZoo.png" />
<MobileHeader />

        <section className="whiteSection" >
            <h1>Mapa do ZooBRA</h1>
            <img src="/images/mapaZoo.png" alt="" className="mapImg"/>
        </section>
        <Footer />
    </>)
}