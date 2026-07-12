import { Footer } from "../elements/Footer"
import { Header } from "../elements/Header"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import './pagesStyles/BuyTicketsPage.css'
export const BuyTicketsPage = () => {
    const date = new Date()
    const currentlyDay = date.getDate()
    const currentlyMonth = date.getMonth()
    const currentlyYear = date.getFullYear()
    const calendarLastDate = (month, year) => { return new Date(year, month, 0).getDate() }
    const firstDayOfWeek = new Date(currentlyYear, currentlyMonth, 1).getDay()
    const emptyDays = Array.from({ length: firstDayOfWeek })
    const calendarLastDateVar = /* calendarLastDate(currentlyMonth, currentlyYear) */ 31
    const mes31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const mes30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const mes29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    const mes28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    const ticketsTypes = [
        { nome: "Ingresso: Inteira", preco: 150 },
        { nome: "Ingresso: Meia-Entrada", preco: 75 },
    ]
    const totalPrice = 100
    const mesesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro']
    return (<>
        <HeaderNav headerLogo="/assets/logoZoo.png" />
        <MobileHeader />
        <section className="whiteSection">
            <form action="" className="buyTicketsForm" onSubmit={e => e.preventDefault()}>
                <section className="buyTicketsInputContainer">
                    <h1>Comprar Ingressos</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus possimus eos magnam illo saepe natus laboriosam perspiciatis nisi quibusdam corrupti atque, impedit ea hic doloremque fuga, itaque et accusantium quasi.</p>
                    {ticketsTypes.map(ticketType => {
                        return (<div className="ticketBox">
                            <div className="ticketsText">
                                <h2>{ticketType.nome}</h2>
                                <h2>R${ticketType.preco},00</h2>
                            </div>
                            <div className="ticketsAmountInputContainer">
                                <label htmlFor="ticketsAmount">
                                    Quantidade de Ingressos:
                                </label>
                                <div className="ticketsAmountInput">

                                    <input type="text" inputMode="numeric" id="ticketsAmount" />
                                    <button>-</button>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>)
                    })}


                    <label htmlFor="buyInfoName">Nome
                        <input className="buyTicketsInput" id="buyInfoCPF" type="text" placeholder="José" />
                    </label><label htmlFor="buyInfoLastName">Sobrenome
                        <input className="buyTicketsInput" id="buyInfoCPF" type="text" placeholder="Ferreira" />
                    </label><label htmlFor="buyInfoTel">Telefone / Celular
                        <input className="buyTicketsInput" id="buyInfoCPF" type="tel" placeholder="11 91234-5678" />
                    </label>
                    <label htmlFor="buyInfoEmail">Email
                        <input className="buyTicketsInput" id="buyInfoEmail" type="email" placeholder="nome@gmail.com" />
                    </label>
                    <label htmlFor="buyInfoCPF">CPF
                        <input className="buyTicketsInput" id="buyInfoCPF" type="text" placeholder="123.456.789-00" />
                    </label>


                </section>

                <section className="calendarContainer">
                    <div className="calendarioNav">
                        <h2>{mesesNomes[currentlyMonth]}</h2>
                        <button>{`>`}</button>

                    </div>
                    <p className="weekDay">Dom</p>
                    <p className="weekDay">Seg</p>
                    <p className="weekDay">Ter</p>
                    <p className="weekDay">Qua</p>
                    <p className="weekDay">Qui</p>
                    <p className="weekDay">Sex</p>
                    <p className="weekDay">Sab</p>
                    {
                        emptyDays.map(emptyDay => {
                            return( <p className="emptyDay"></p>)
                        })
                    }
                    {

                        calendarLastDateVar === 31 ? mes31.map(dia => {
                            const dayType = [(<>
                                    <label htmlFor={`day${dia}`} >{dia}</label>
                                    <input id={`day${dia}`} type="checkbox" className="dateCheckBox" />
                                </>) , (<>
                                    <label htmlFor={`day${dia}`} >{dia}</label>
                                    <input id={`day${dia}`} type="checkbox" disabled className="dateCheckBox" />
                                </>) ]

                            return (currentlyDay > dia ? dayType[1] :dayType[0])
                        }) : <></>

                    }
                </section>
                <div>
                    <h2>Total: R${totalPrice}</h2>
                </div>
                <button type="submit">Prosseguir com o pagamento</button>
            </form>

        </section>
        <Footer />
    </>)
}