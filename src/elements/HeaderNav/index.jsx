import "./Navigator.css"

import {Link} from 'react-router-dom'

export const HeaderNav = (props)=>{
    return(
        <nav className="header">
                <Link to={'/'} href="index.html" className="zooLogoContainer">
                    <img src={props.headerLogo} alt="" className="zooLogo" />
                </Link>
                <div className="linksHeader">
                    <Link to={'/ingressos'} className="linkBtnHeader" >Ingreços</Link >
                    <Link className="linkBtnHeader" >Eventos</Link >
                    <Link className="linkBtnHeader" >Depoimentos</Link >
                    <Link className="linkBtnHeader" >Educativo</Link >
                    <Link className="linkBtnHeader" >Programação</Link >
                    <Link className="linkBtnHeader" >Mapa do zoológico</Link >
                    <Link className="linkBtnHeader" >Contato</Link >
                </div>
            </nav>
    )
}