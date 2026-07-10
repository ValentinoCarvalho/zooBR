import "./Navigator.css"

import {Link} from 'react-router-dom'

export const HeaderNav = (props)=>{
    return(
        <nav className="header">
                <Link to={'/'} href="index.html" className="zooLogoContainer">
                    <img src={props.headerLogo} alt="" className="zooLogo" />
                </Link>
                <div className="linksHeader">
                    <Link to={'/ingressos'} className="linkBtnHeader" >Ingressos</Link >
                    <Link to={'/'} className="linkBtnHeader" >Eventos</Link >
                    <Link to={'/'} className="linkBtnHeader" >Depoimentos</Link >
                    <Link to={'/educativo'} className="linkBtnHeader" >Educativo</Link >
                    <Link to={'/'} className="linkBtnHeader" >Programação</Link >
                    <Link to={'/mapa'} className="linkBtnHeader" >Mapa do zoológico</Link >
                    <Link to={'/contato'} className="linkBtnHeader" >Contato</Link >
                </div>
            </nav>
    )
}