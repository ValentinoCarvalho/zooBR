import { Footer } from "../elements/Footer"
import { Header } from "../elements/Header"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import "./pagesStyles/TermosECondicoes.css"

export const TermosECondicoes = () => {
    return (
        <>
            <HeaderNav headerLogo="/assets/logoZoo.png"/>

            <MobileHeader/>
            <section class="terms">

                <h1>Termos e Condições de Uso</h1>

                <hr></hr>

                <h2>Projeto Acadêmico</h2>

                <p>
                    O <strong>ZooBRA</strong> é um projeto fictício desenvolvido exclusivamente para
                    fins acadêmicos e de demonstração de habilidades em desenvolvimento web,
                    design de interfaces (UI), experiência do usuário (UX) e programação.
                </p>

                <p>
                    Todas as informações apresentadas neste website, incluindo textos, eventos,
                    preços, mapas, projetos de conservação, depoimentos, imagens ilustrativas e
                    demais conteúdos, possuem caráter demonstrativo e não representam uma
                    instituição zoológica real.
                </p>

                <p>
                    Este projeto não realiza vendas de ingressos, reservas ou prestação de
                    serviços. Qualquer semelhança com empresas, organizações ou pessoas reais é
                    meramente ilustrativa e utilizada apenas para fins de composição visual e
                    educacional.
                </p>

                <p>
                    O desenvolvimento do ZooBRA tem como objetivo apresentar conhecimentos em
                    HTML, CSS, JavaScript, design responsivo, arquitetura de interfaces e boas
                    práticas de desenvolvimento de aplicações web.
                </p>

                <hr></hr>

                <p>
                    Seja bem-vindo ao <strong>ZooBRA</strong>. Ao adquirir ingressos, utilizar
                    nossos serviços ou acessar este website, você concorda com os termos e
                    condições descritos abaixo. Recomendamos a leitura completa deste documento
                    antes de concluir sua compra ou visita.
                </p>

                <hr></hr>

                <h2>1. Ingressos</h2>

                <p>
                    Os ingressos adquiridos são válidos exclusivamente para a data selecionada
                    durante a compra. Alterações de data estão sujeitas à disponibilidade e às
                    políticas vigentes do ZooBRA.
                </p>

                <ul>
                    <li>Os ingressos são individuais e intransferíveis.</li>
                    <li>É obrigatória a apresentação do comprovante de compra na entrada.</li>
                    <li>Crianças deverão estar acompanhadas por um responsável legal.</li>
                    <li>Benefícios de meia-entrada poderão exigir documentação comprobatória.</li>
                </ul>

                <hr></hr>

                <h2>2. Cancelamentos e Reembolsos</h2>

                <p>
                    Solicitações de cancelamento poderão ser realizadas conforme a legislação
                    vigente. Após o prazo estabelecido, os ingressos não poderão ser
                    reembolsados, salvo em casos previstos em lei ou por cancelamento do evento
                    pelo ZooBRA.
                </p>

                <hr></hr>

                <h2>3. Normas de Visitação</h2>

                <p>
                    Para garantir a segurança dos visitantes e o bem-estar dos animais, todos
                    deverão seguir as orientações da equipe durante a permanência no parque.
                </p>

                <ul>
                    <li>É proibido alimentar os animais sem autorização.</li>
                    <li>Não ultrapasse barreiras ou áreas restritas.</li>
                    <li>Respeite a sinalização distribuída pelo parque.</li>
                    <li>É proibido causar qualquer tipo de perturbação aos animais.</li>
                    <li>Animais domésticos não são permitidos, exceto cães-guia.</li>
                </ul>

                <hr></hr>

                <h2>4. Segurança</h2>

                <p>
                    O ZooBRA dispõe de equipes treinadas para atendimento aos visitantes.
                    Entretanto, cada visitante é responsável pelos seus objetos pessoais durante
                    a permanência no parque.
                </p>

                <p>
                    Em caso de emergência, siga imediatamente as orientações dos colaboradores
                    e dirija-se ao ponto de apoio mais próximo.
                </p>

                <hr></hr>

                <h2>5. Fotografias e Filmagens</h2>

                <p>
                    Fotografias e vídeos para uso pessoal são permitidos, desde que não
                    comprometam a segurança dos animais, dos visitantes ou das instalações.
                </p>

                <p>
                    O uso comercial de imagens do ZooBRA depende de autorização prévia.
                </p>

                <hr></hr>

                <h2>6. Programação</h2>

                <p>
                    Atividades, apresentações, visitas guiadas e eventos especiais poderão ser
                    alterados ou cancelados devido às condições climáticas, necessidades
                    veterinárias ou questões operacionais.
                </p>

                <hr></hr>

                <h2>7. Proteção de Dados</h2>

                <p>
                    Os dados fornecidos durante o processo de compra são utilizados
                    exclusivamente para processamento dos ingressos, atendimento ao visitante e
                    cumprimento de obrigações legais, respeitando a legislação aplicável sobre
                    proteção de dados.
                </p>

                <hr></hr>

                <h2>8. Responsabilidade Ambiental</h2>

                <p>
                    O ZooBRA incentiva práticas sustentáveis e solicita a colaboração de todos
                    os visitantes para manter os ambientes limpos, preservando a fauna, a flora
                    e os espaços comuns.
                </p>

                <hr></hr>

                <h2>9. Alterações dos Termos</h2>

                <p>
                    Estes Termos e Condições poderão ser atualizados a qualquer momento para
                    refletir mudanças em nossos serviços, legislação ou políticas internas.
                    Recomendamos consultar esta página periodicamente.
                </p>

                <hr></hr>

                <h2>10. Contato</h2>

                <p>
                    Caso tenha dúvidas sobre estes Termos e Condições, entre em contato com a
                    equipe do ZooBRA através dos canais oficiais disponibilizados na página de
                    contato.
                </p>

                <p>
                    <strong>Última atualização:</strong> Agosto de 2026.
                </p>

            </section>

            <Footer />
        </>
    )
}