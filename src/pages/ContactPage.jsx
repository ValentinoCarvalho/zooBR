import { Footer } from "../elements/Footer"
import { Header } from "../elements/Header"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import { Notification } from "../elements/Notification/Notification"
import { useState } from "react"
import './pagesStyles/ContactPage.css'

export const ContactPage = () => {
    const [displayNotification, setDisplayNotification] = useState(false)

    return (<>
        {displayNotification === true ? <Notification title="Formulário enviado com sucesso!" text="Você receberá sua resposta através dos meios de contatos disponíveis dentro de 3 dias úteis." display='true' /> : <></>}


        <HeaderNav headerLogo="/assets/logoZoo.png" />
        <MobileHeader />

        <section className="whiteSection">
            <h1>Contato</h1>
            <div className="textContact">
                <h3>Você pode entrar em contato através de nosso telefone, email ou através do nosso formulário:</h3>
                <p>(11) 4000-1234</p>
                <p>contato@zoobra.com.br</p>
            </div>
            <h2>formulário</h2>
            <form className="formContact" onSubmit={e=>{e.preventDefault();setDisplayNotification(true)}}>

                <label htmlFor="name" className="mandatoryInput">Primeiro nome:</label>
                <input id='name' className="formInput" type="text" name="" maxLength={50} placeholder="José" required />

                <label htmlFor="lastName" className="mandatoryInput">Sobrenome:</label>
                <input id='lastName' className="formInput" type="text" name="" maxLength={50} placeholder="Ferreira" required />

                <label htmlFor="email" className="mandatoryInput">Email:</label>
                <input id='email' className="formInput" type="email" name="" maxLength={256} placeholder="nome@gmail.com" required />

                <label htmlFor="telephone">Telefone / celular:</label>
                <input id='telephone' className="formInput" type="tel" name="" maxLength={25} placeholder="(11)1234-5678" />

                <label htmlFor="contactReason" className="mandatoryInput" maxLength={1500} required>Motivo de contato:</label>
                <textarea name="" id="contactReason" required></textarea>

                <input id='' className="formInput" type="submit" name="" onSubmit={(ee) => {
                    setDisplayNotification(true);
                    ee.preventDefault()
                }} />
            </form>
        </section>
        <Footer />
    </>)
}