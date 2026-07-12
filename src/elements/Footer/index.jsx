import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <footer className="footerPc">
                <div id="logoFooter">
                    <img src="/assets/logoZoo.png" alt="" />
                    <h2>Conectando pessoas à natureza... </h2>
                </div>
                <ul id="navegacaoFooter">
                    <h2>Navegação</h2>
                    <li><a href="">Início</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Eventos</a></li>
                    <li><a href="">Educativo</a></li>
                    <li><a href="">Mapa do Zoológico</a></li>
                    <li><a href="">Depoimentos</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Trabalhe Conosco</a></li>
                </ul>
                <ul id="horarioFooter">
                    <h2>Visite-nos</h2>
                    <li>Avenida Miguel Estéfano, 4241 - Água Funda, São Paulo - SP, CEP 04301-905</li>
                    <li>08h00 às 18h00</li>
                    <li>Bilheteria até 17h00</li>
                    <li>Estacionamento: R$70,00 (preço fixo)</li>
                </ul>
                <ul id="contatoFooter">
                    <h2>Contato</h2>
                    <li>Telefone: (11) 4000-1234</li>
                    <li>Email: contato@zoobra.com.br</li>
                    <li>WhatsApp: (11) 99999-9999</li>
                </ul>
                <ul id="meiosDePagamentoFooter">
                    <h2>Meios de Pagamento</h2>
                    <div>
                    <img src="/payM/pix.svg" className="payM" alt="" />
                    <img src="/payM/apple-pay.svg" className="payM" alt="" />
                    <img src="/payM/google-pay.svg" className="payM" alt="" />
                    <img src="/payM/visa.svg" className="payM" alt="" />
                    <img src="/payM/mastercard.svg" className="payM" alt="" />
                    </div>
                </ul>
                <div className="redesFooterContainer">
                    <h2>Nossas Redes</h2>
                    <ul id="redesFooter">
                        <a href=""><img src="/assets/facebook-brands-solid-full.svg" alt="" /></a>
                        <a href=""><img src="/assets/instagram-brands-solid-full.svg" alt="" /></a>
                        <a href=""><img src="/assets/youtube-brands-solid-full.svg" alt="" /></a>
                        <a href=""><img src="/assets/x-twitter-brands-solid-full.svg" alt="" /></a>
                        <a href=""><img src="/assets/bluesky-brands-solid-full.svg" alt="" /></a>
                    </ul>
                </div>
                <div id="infoFooter">
                    <p>
                        © 2026 ZooBRA.
                        <br />
                        Todos os direitos reservados.
                        <br />
                        Desenvolvido por Valentino Carvalho
                    </p>
                </div>
            </footer>
        </>
    )
}